import React, { useEffect, useState } from "react";
import Card from "../Card";

const ClockCard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => setCurrentDate(new Date().toLocaleString()), []);

  return (
    <Card>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900 mb-8">現在の時刻</h3>
          <span className="text-3xl leading-none font-bold text-gray-900">
            {currentDate}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ClockCard;
