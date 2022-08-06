import React from "react";

type Props = {
  value: number | null | undefined;
  min: number;
  max: number;
};

const BarGraph: React.FC<Props> = ({ value, min, max }) => {
  const barVal = value ?? 0;

  return (
    <div className="w-full bg-gray-200 rounded-sm h-3">
      <div
        className="bg-sky-800 h-3 rounded-sm"
        style={{ width: `${((barVal - min) / (max - min)) * 100}%` }}
      ></div>
    </div>
  );
};

export default BarGraph;
