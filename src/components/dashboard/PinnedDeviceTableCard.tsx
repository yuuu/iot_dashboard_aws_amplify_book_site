import React from "react";
import Card from "../Card";

const AcquisitionOverviewCard: React.FC = () => {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ピン留めデバイス
          </h3>
          <span className="text-base font-normal text-gray-500">
            ピン留めしたデバイスの計測結果を一覧表示します
          </span>
        </div>
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-sm font-medium text-sky-800 hover:bg-gray-100 rounded-lg p-2"
          >
            すべて見る
          </a>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="table-fixed items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                デバイス名
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                温度
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                湿度
              </th>
              <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                気圧
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              {
                deviceName: "デバイスA",
                temperature: 30,
                humid: 40,
                pressure: 1000,
                key: "device-a",
              },
              {
                deviceName: "デバイスB",
                temperature: 10,
                humid: 89,
                pressure: 950,
                key: "device-b",
              },
              {
                deviceName: "デバイスC",
                temperature: 23,
                humid: 67,
                pressure: 1013,
                key: "device-c",
              },
              {
                deviceName: "デバイスD",
                temperature: 19,
                humid: 39,
                pressure: 1003,
                key: "device-d",
              },
            ].map(({ deviceName, temperature, humid, pressure, key }) => (
              <tr key={key} className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  {deviceName}
                </th>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <div className="mr-2 text-xs font-medium w-full md:w-1/3">
                      {temperature}℃
                    </div>
                    <div className="relative w-full hidden md:block">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-sky-800 h-2 rounded-sm"
                          style={{ width: `${(temperature / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <div className="mr-2 text-xs font-medium w-full md:w-1/3">
                      {humid}%
                    </div>
                    <div className="relative w-full hidden md:block">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-sky-800 h-2 rounded-sm"
                          style={{ width: `${humid}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <div className="mr-2 text-xs font-medium w-full md:w-1/3">
                      {pressure}hPa
                    </div>
                    <div className="relative w-full hidden md:block">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-sky-800 h-2 rounded-sm"
                          style={{
                            width: `${
                              ((pressure - 870) / (1100 - 870)) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AcquisitionOverviewCard;
