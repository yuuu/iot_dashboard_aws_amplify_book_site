import Link from "next/link";
import React from "react";
import { Device } from "../../types/device";
import BarGraphWithValue from "../BarGraphWithValue";
import DeviceStatus from "../DeviceStatus";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import ShowIcon from "../icons/ShowIcon";

type Props = {
  devices: Device[];
  onEdit: (device: Device) => void;
  onDestroy: (device: Device) => void;
};

const BarGraph: React.FC<Props> = ({ devices, onEdit, onDestroy }) => {
  return (
    <table className="table-auto items-center w-full bg-transparent border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th
            scope="col"
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            デバイス名
          </th>
          <th
            scope="col"
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            ステータス
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            温度
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            湿度
          </th>
          <th
            scope="col"
            className="hidden md:table-cell w-1/6 p-4 text-left text-xs font-medium text-gray-500 uppercase"
          >
            気圧
          </th>
          <th scope="col" className="p-4"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {devices.map((device) => (
          <tr key={device.id} className="hover:bg-gray-100">
            <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
              <div className="text-sm text-sky-800">
                <Link href={`/devices/${device.id}`}>
                  <a>{device.name}</a>
                </Link>
              </div>
            </td>
            <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
              <DeviceStatus status={device.status} />
            </td>
            <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
              <BarGraphWithValue
                value={device.temperature}
                unit="℃"
                max={50}
                min={-10}
              />
            </td>
            <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
              <BarGraphWithValue
                value={device.humid}
                unit="%"
                max={100}
                min={0}
              />
            </td>
            <td className="hidden md:table-cell px-4 align-middle text-xs whitespace-nowrap p-4">
              <BarGraphWithValue
                value={device.pressure}
                unit="hPa"
                max={1100}
                min={870}
              />
            </td>
            <td className="p-4 whitespace-nowrap space-x-2 text-right">
              <button
                type="button"
                data-modal-toggle="device-modal"
                className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                onClick={() => onEdit(device)}
              >
                <EditIcon />
                <span className="hidden md:inline">編集</span>
              </button>
              <button
                type="button"
                data-modal-toggle="delete-device-modal"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                onClick={() => onDestroy(device)}
              >
                <DeleteIcon />
                <span className="hidden md:inline">削除</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BarGraph;
