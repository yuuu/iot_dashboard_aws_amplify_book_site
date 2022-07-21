import React from "react";

type Props = {
  value: number;
  min: number;
  max: number;
  unit: string;
};

const BarGraph: React.FC<Props> = ({ value, min, max, unit }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2 text-xs font-medium w-full md:w-1/3">
        {value}
        {unit}
      </div>
      <div className="relative w-full hidden md:block">
        <div className="w-full bg-gray-200 rounded-sm h-2">
          <div
            className="bg-sky-800 h-2 rounded-sm"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
