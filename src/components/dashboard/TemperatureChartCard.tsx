import React from "react";
import Card from "../Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Device } from "../../API";
import ReactLoading from "react-loading";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  devices?: (Device | null)[];
};

const TemperatureChartCard: React.FC<Props> = ({ devices }) => {
  if (!devices)
    return (
      <Card>
        <ReactLoading type="bars" color="#6b7280" height="50px" width="50px" />
      </Card>
    );

  const comfortable = devices.filter((device) => {
    if (!device?.temperature) return false;
    return 15 <= device.temperature && device.temperature <= 30;
  }).length;

  const data = {
    labels: ["快適", "不快"],
    datasets: [
      {
        data: comfortable
          ? [comfortable, devices.length - comfortable]
          : [0, 0],
        backgroundColor: ["#075985", "#F43F5E"],
      },
    ],
  };

  return (
    <Card>
      <div className="mb-4 flex flex-col items-left justify-left">
        <h3 className="text-xl font-bold text-gray-900 mb-8">温度状況</h3>
        <Doughnut data={data} />
      </div>
    </Card>
  );
};

export default TemperatureChartCard;
