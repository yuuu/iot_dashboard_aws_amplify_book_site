import Link from "next/link";
import React from "react";
import { Device } from "../../data/devices";
import { useDeviceUtils } from "../../hooks/useDeviceUtils";
import BarGraphWithValue from "../BarGraphWithValue";
import DeviceStatus from "../DeviceStatus";
import DeleteIcon from "../icons/DeleteIcon";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

type Props = {
  devices: Device[] | undefined;
  onEdit: (device: Device) => void;
  onDestroy: (device: Device) => void;
};

const BarGraph: React.FC<Props> = ({ devices, onEdit, onDestroy }) => {
  const { isOnline } = useDeviceUtils();

  return (
    <table className="table-auto items-center w-full bg-transparent border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th
            scope="col"
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            デバイス名
          </th>
          <th
            scope="col"
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            ステータス
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            温度
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            湿度
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            気圧
          </th>
          <th scope="col" className="p-4"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {devices?.map((device) => {
          const { id, name, currentMeasurement } = device;
          return (
            <tr key={id} className="hover:bg-gray-100">
              <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                <div className="text-sm text-sky-800">
                  <Link href={`/devices/${id}`}>
                    <a>{name}</a>
                  </Link>
                </div>
              </td>
              <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
                <DeviceStatus isOnline={isOnline(device)} />
              </td>
              <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
                <BarGraphWithValue
                  value={currentMeasurement?.temperature}
                  unit="℃"
                  max={50}
                  min={-10}
                />
              </td>
              <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
                <BarGraphWithValue
                  value={currentMeasurement?.humid}
                  unit="%"
                  max={100}
                  min={0}
                />
              </td>
              <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
                <BarGraphWithValue
                  value={currentMeasurement?.pressure}
                  unit="hPa"
                  max={1100}
                  min={870}
                />
              </td>
              <td className="p-4 whitespace-nowrap space-x-2 text-right">
                <EditButton onClick={() => onEdit(device)} />
                <DeleteButton onClick={() => onDestroy(device)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BarGraph;
