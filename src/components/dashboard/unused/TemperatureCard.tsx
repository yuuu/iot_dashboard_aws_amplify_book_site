import React from "react";
import Card from "../../Card";

const TemperatureCard: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h3 className="text-base font-normal text-gray-500">現在の気温</h3>
          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
            25.2
          </span>
        </div>
        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-xl font-bold">
          ℃
        </div>
      </div>
    </Card>
  );
};

export default TemperatureCard;
