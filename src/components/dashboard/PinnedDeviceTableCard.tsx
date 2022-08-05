import React from "react";
import BarGraphWithValue from "../BarGraphWithValue";
import Card from "../Card";
import DeviceStatus from "../DeviceStatus";
import Link from "next/link";
import { Device } from "../../API";
import ReactLoading from "react-loading";

type Props = {
  devices?: (Device | null)[];
};

const AcquisitionOverviewCard: React.FC<Props> = ({ devices }) => {
  if (!devices)
    return (
      <Card>
        <ReactLoading type="bars" color="#6b7280" height="50px" width="50px" />
      </Card>
    );

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
            {devices
              ?.flatMap((i) => (i === null ? [] : [i]))
              .map(({ id, name, temperature, humid, pressure, status }) => (
                <tr key={id} className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-sky-800">
                    <Link href={`/devices/${id}`}>
                      <a>{name}</a>
                    </Link>
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <DeviceStatus status={status} />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraphWithValue
                      value={temperature}
                      unit="℃"
                      max={50}
                      min={-10}
                    />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraphWithValue
                      value={humid}
                      unit="%"
                      max={100}
                      min={0}
                    />
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <BarGraphWithValue
                      value={pressure}
                      unit="hPa"
                      max={1100}
                      min={870}
                    />
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
