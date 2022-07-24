import React from "react";
import BarGraph from "../BarGraph";
import Card from "../Card";
import DeviceStatus from "../DeviceStatus";
import devices from "../../data/devices";
import Link from "next/link";

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
          <Link href="/devices">
            <a className="text-sm font-medium text-sky-800 hover:bg-gray-100 rounded-lg p-2">
              すべて見る
            </a>
          </Link>
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
                ステータス
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
            {devices.map(
              ({ deviceName, temperature, humid, pressure, status, key }) => (
                <tr key={key} className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    {deviceName}
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <DeviceStatus status={status} />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraph value={temperature} unit="℃" max={50} min={-10} />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraph value={humid} unit="%" max={100} min={0} />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraph
                      value={pressure}
                      unit="hPa"
                      max={1100}
                      min={870}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AcquisitionOverviewCard;
