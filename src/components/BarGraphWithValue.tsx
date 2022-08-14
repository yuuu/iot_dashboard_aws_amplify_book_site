import React from "react";

type Props = {
  value: number | null | undefined;
  min: number;
  max: number;
  unit: string;
};

const BarGraphWithValue: React.FC<Props> = ({ value, min, max, unit }) => {
  const barVal = Math.round(value ?? 0);

  return (
    <div className="flex items-center w-full">
      <div className="mr-2 text-xs font-medium w-full md:w-1/3">
        {value && Math.round(value)}
        {unit}
      </div>
      <div className="relative w-full hidden md:block">
        <div className="w-full bg-gray-200 rounded-sm h-2">
          <div
            className="bg-sky-800 h-2 rounded-sm"
            style={{ width: `${((barVal - min) / (max - min)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarGraphWithValue;
