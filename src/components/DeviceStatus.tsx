import React from "react";

type Props = {
  isOnline: boolean;
};

const DeviceStatus: React.FC<Props> = ({ isOnline }) => {
  return (
    <div className="flex items-center">
      {isOnline ? (
        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
      ) : (
        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
      )}
    </div>
  );
};

export default DeviceStatus;
