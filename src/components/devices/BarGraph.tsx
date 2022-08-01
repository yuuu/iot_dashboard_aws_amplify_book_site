import React from "react";

type Props = {
  value: number;
  min: number;
  max: number;
};

const BarGraph: React.FC<Props> = ({ value, min, max }) => {
  return (
    <div className="w-full bg-gray-200 rounded-sm h-3">
      <div
        className="bg-sky-800 h-3 rounded-sm"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
    </div>
  );
};

export default BarGraph;
