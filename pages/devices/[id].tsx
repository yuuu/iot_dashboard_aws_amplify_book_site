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
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

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
  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        title: {
          text: "温度",
          display: true,
        },
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        title: {
          text: "湿度",
          display: true,
        },
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        title: {
          text: "気圧",
          display: true,
        },
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = [...Array(5).keys()]
    .map((n) => dayjs().subtract(n, "minute"))
    .map((n) => n.format("MM/DD hh:mm"))
    .reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "温度",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#075985",
        backgroundColor: "#075985",
        yAxisID: "y",
      },
      {
        label: "湿度",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#FACC15",
        backgroundColor: "#FACC15",
        yAxisID: "y1",
      },
      {
        label: "気圧",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#DB2777",
        backgroundColor: "#DB2777",
        yAxisID: "y2",
      },
    ],
  };

  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumbs
              pages={[
                { name: "Devices", link: "/devices" },
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
              <Card className="sm:p-6 xl:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">温度</h3>
                <div className="flex">
                  <div className="flex space-x-4 items-center">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      28.3
                    </span>
                    <div className="text-xl font-bold">℃</div>
                  </div>
                </div>
              </Card>
              <Card className="sm:p-6 xl:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">湿度</h3>
                <div className="flex">
                  <div className="flex space-x-4 items-center">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      56
                    </span>
                    <div className="text-xl font-bold">%</div>
                  </div>
                </div>
              </Card>
              <Card className="sm:p-6 xl:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">気圧</h3>
                <div className="flex">
                  <div className="flex space-x-4 items-center">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                      1013
                    </span>
                    <div className="text-xl font-bold">hPa</div>
                  </div>
                </div>
              </Card>
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
