import type { NextPage } from "next";
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
import deviceValues from "../../src/data/deviceValues";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeviceShow: NextPage = () => {
  const { options, data } = useLineChart(deviceValues);
  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumbs
              pages={[
                { name: "デバイス", link: "/devices" },
                { name: "デバイス1", link: "/devices/1" },
              ]}
            />
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              デバイス1
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { name: "温度", value: 28.3, unit: "℃", max: 50, min: -10 },
                { name: "湿度", value: 56, unit: "%", max: 100, min: 0 },
                { name: "気圧", value: 1013, unit: "hPa", max: 1100, min: 870 },
              ].map(({ name, value, unit, max, min }) => (
                <Card key={name} className="sm:p-6 xl:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {name}
                  </h3>
                  <div className="flex space-x-4 items-center">
                    <div className="flex space-x-4 items-center">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        {value}
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
    </>
  );
};

export default DeviceShow;
