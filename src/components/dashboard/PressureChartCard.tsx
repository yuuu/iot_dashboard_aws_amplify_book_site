import React from "react";
import Card from "../Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ReactLoading from "react-loading";
import { Device } from "../../API";
import { useDeviceUtils } from "../../hooks/useDeviceUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  devices?: Device[];
};

const AtmosphericPressureChartCard: React.FC<Props> = ({ devices }) => {
  const { isComfortablePressure } = useDeviceUtils();

  if (!devices)
    return (
      <Card>
        <ReactLoading type="bars" color="#6b7280" height="50px" width="50px" />
      </Card>
    );

  const comfortable = devices.filter((device) =>
    isComfortablePressure(device)
  ).length;
  const data = {
    labels: ["快適", "不快"],
    datasets: [
      {
        data: [comfortable, devices.length - comfortable],
        backgroundColor: ["#075985", "#F43F5E"],
      },
    ],
  };

  return (
    <Card>
      <div className="mb-4 flex flex-col items-left justify-left">
        <h3 className="text-xl font-bold text-gray-900 mb-8">気圧状況</h3>
        <Doughnut data={data} />
      </div>
    </Card>
  );
};

export default AtmosphericPressureChartCard;
