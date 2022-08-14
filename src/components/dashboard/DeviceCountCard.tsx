import React from "react";
import ReactLoading from "react-loading";
import { Device } from "../../data/devices";
import { useDeviceUtils } from "../../hooks/useDeviceUtils";
import Card from "../Card";

type Props = {
  className: string;
  devices?: Device[];
};

const DeviceCountCard: React.FC<Props> = ({ className, devices }) => {
  const { isOnline } = useDeviceUtils();
  if (!devices)
    return (
      <Card className={className}>
        <ReactLoading type="bars" color="#6b7280" height="50px" width="50px" />
      </Card>
    );
  const online = devices.filter((device) => isOnline(device)).length;
  const offline = devices.length - online;

  return (
    <Card className={className}>
      <h3 className="text-xl font-bold text-gray-900 mb-4 2xl:mb-8">
        デバイス数
      </h3>
      <div className="flex flex-row space-x-16 2xl:flex-col 2xl:space-x-0 2xl:space-y-4">
        <div className="flex flex-col xl:flex-row w-1/3 2xl:w-full xl:space-x-4 xl:justify-between xl:items-center">
          <h4 className="text-base font-normal text-gray-500 mb-2 xl:mb-0">
            合計
          </h4>
          <div className="flex">
            <div className="flex space-x-4 items-center">
              <span className="text-2xl sm:text-4xl leading-none font-bold text-gray-900">
                {devices.length}
              </span>
              <div className="text-xl font-bold">台</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-1/3 2xl:w-full xl:space-x-4 xl:justify-between xl:items-center">
          <h4 className="text-base font-normal text-green-500 mb-2 xl:mb-0">
            オンライン
          </h4>
          <div className="flex">
            <div className="flex space-x-4 items-center">
              <span className="text-2xl sm:text-4xl leading-none font-bold text-gray-900">
                {online}
              </span>
              <div className="text-xl font-bold">台</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-1/3 2xl:w-full xl:space-x-4 xl:justify-between xl:items-center">
          <h4 className="text-base font-normal text-red-500 mb-2 xl:mb-0">
            オフライン
          </h4>
          <div className="flex">
            <div className="flex space-x-4 items-center">
              <span className="text-2xl sm:text-4xl leading-none font-bold text-gray-900">
                {offline}
              </span>
              <div className="text-xl font-bold">台</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DeviceCountCard;
