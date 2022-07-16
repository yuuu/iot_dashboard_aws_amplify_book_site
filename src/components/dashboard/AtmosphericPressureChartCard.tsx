import React from "react";
import Card from "../Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AtmosphericPressureChartCard: React.FC = () => {
  const data = {
    labels: ["快適", "不快"],
    datasets: [
      {
        data: [20, 10],
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
