import type { GetServerSidePropsContext, NextPage } from "next";
import { useState } from "react";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import Card from "../../src/components/Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import BarGraph from "../../src/components/devices/BarGraph";
import useLineChart from "../../src/hooks/useLineChart";
import ReactLoading from "react-loading";
import { useFetchDevice } from "../../src/hooks/useDevices";
import EditDeviceModal from "../../src/components/devices/EditDeviceModal";
import DeleteDeviceModal from "../../src/components/devices/DeleteDeviceModal";
import EditButton from "../../src/components/devices/EditButton";
import DeleteButton from "../../src/components/devices/DeleteButton";
import { Device } from "../../src/API";
import { useRouter } from "next/router";
import { useFetchMeasurements } from "../../src/hooks/useMeasurements";
import CertificatesCard from "../../src/components/devices/CertificatesCard";
import { useDeviceUtils } from "../../src/hooks/useDeviceUtils";
import DeviceStatus from "../../src/components/DeviceStatus";
import { useEndpointIoT } from "../../src/hooks/useEndpointIoT";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  id: string;
};

const DeviceShow: NextPage<Props> = ({ id }) => {
  const device = useFetchDevice(id);
  const endpoint = useEndpointIoT();
  const measurements = useFetchMeasurements(id);
  const [editModal, setEditModal] = useState<Device | null>(null);
  const [deleteModal, setDeleteModal] = useState<Device | null>(null);
  const { options, data } = useLineChart(measurements ?? []);
  const router = useRouter();
  const { isOnline } = useDeviceUtils();

  if (!device) {
    return (
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <ReactLoading type="bars" color="#6b7280" height="5%" width="5%" />
      </div>
    );
  }

  const onEdit = (device: Device) => setEditModal(device);
  const onDestroy = (device: Device) => setDeleteModal(device);
  const onDeleted = () => {
    setDeleteModal(null);
    router.push("/devices");
  };

  const { name, currentMeasurement } = device;

  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumbs
              pages={[
                { name: "デバイス", link: "/devices" },
                { name: name, link: `/devices/${id}` },
              ]}
            />
            <div className="flex justify-between mb-4">
              <h1 className="flex items-center space-x-4 ">
                <span className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {name}
                </span>
                <DeviceStatus isOnline={isOnline(device)} />
              </h1>
              <div className="flex space-x-2">
                <EditButton onClick={() => onEdit(device)} />
                <DeleteButton onClick={() => onDestroy(device)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                {
                  name: "温度",
                  value: currentMeasurement?.temperature,
                  unit: "℃",
                  max: 50,
                  min: -10,
                },
                {
                  name: "湿度",
                  value: currentMeasurement?.humid,
                  unit: "%",
                  max: 100,
                  min: 0,
                },
                {
                  name: "気圧",
                  value: currentMeasurement?.pressure,
                  unit: "hPa",
                  max: 1100,
                  min: 870,
                },
              ].map(({ name, value, unit, max, min }) => (
                <Card key={name} className="sm:p-6 xl:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {name}
                  </h3>
                  <div className="flex space-x-4 items-center">
                    <div className="flex space-x-4 items-center">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        {value && Math.round(value)}
                      </span>
                      <div className="text-xl font-bold">{unit}</div>
                    </div>
                    <BarGraph value={value} max={max} min={min} />
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-4 w-full grid gap-4">
              <Card className="sm:p-6 xl:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  計測値の推移
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <Line options={options} data={data} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="mt-4 w-full grid gap-4">
              <Card className="sm:p-6 xl:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  エンドポイント
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3 ml-auto mb-8">
                  <span>{endpoint?.address}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  トピック
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3 ml-auto mb-8">
                  <span>enviiewer/devices/{id}</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="mt-4 w-full grid gap-4">
              <CertificatesCard
                device={device}
                certificates={device.certificates?.items}
              />
            </div>
          </div>
        </div>
      </div>
      <EditDeviceModal
        show={!!editModal}
        device={editModal}
        onClose={() => setEditModal(null)}
      />
      <DeleteDeviceModal
        show={!!deleteModal}
        device={deleteModal}
        onClose={onDeleted}
      />
    </>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return { props: { ...context.query } };
};

export default DeviceShow;
