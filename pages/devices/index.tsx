import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import NewDeviceModal from "../../src/components/devices/NewDeviceModal";
import EditDeviceModal from "../../src/components/devices/EditDeviceModal";
import DeviceTable from "../../src/components/devices/DeviceTable";
import Device from "../../src/types/device";
import { useFetchDevices } from "../../src/hooks/useDevices";
import NewButton from "../../src/components/devices/NewButton";

const DeviceIndex: NextPage = () => {
  const devices = useFetchDevices();

  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState<Device | null>(null);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

  useEffect(() => setFilteredDevices(devices), [devices]);

  const onEdit = (device: Device) => setEditModal(device);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredDevices(
      devices?.filter((device) => device.name.match(e.target.value))
    );
  };

  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumbs pages={[{ name: "デバイス", link: "/devices" }]} />
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              デバイス
            </h1>
          </div>
          <div className="sm:flex">
            <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
              <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="devices-search" className="sr-only">
                  検索
                </label>
                <div className="mt-1 relative lg:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="devices-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                    placeholder="デバイス名"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <NewButton onClick={() => setNewModal(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <DeviceTable devices={filteredDevices} onEdit={onEdit} />
            </div>
          </div>
        </div>
      </div>

      <EditDeviceModal
        show={!!editModal}
        device={editModal}
        onClose={() => setEditModal(null)}
      />
      <NewDeviceModal show={newModal} onClose={() => setNewModal(false)} />
    </>
  );
};

export default DeviceIndex;
