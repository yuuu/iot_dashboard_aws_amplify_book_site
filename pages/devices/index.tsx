import { useState } from "react";
import type { NextPage } from "next";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import NewDeviceModal from "../../src/components/devices/NewDeviceModal";
import EditDeviceModal from "../../src/components/devices/EditDeviceModal";
import NewIcon from "../../src/components/icons/NewIcon";
import DeleteDeviceModal from "../../src/components/devices/DeleteDeviceModal";
import DeviceTable from "../../src/components/devices/DeviceTable";
import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import * as queries from "../../src/graphql/queries";
import { Device, ListDevicesQuery } from "../../src/API";
import { useQuery } from "@tanstack/react-query";

const DeviceIndex: NextPage = () => {
  const { data: devices } = useQuery(["devices"], async () => {
    const { data } = (await API.graphql({
      query: queries.listDevices,
    })) as GraphQLResult<ListDevicesQuery>;
    return data?.listDevices?.items.flatMap((d) => (d === null ? [] : [d]));
  });

  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState<Device | null>(null);
  const [deleteModal, setDeleteModal] = useState<Device | null>(null);
  const [filteredDevices, setFilteredDevices] = useState<Device[] | undefined>(
    devices
  );

  const onEdit = (device: Device) => setEditModal(device);
  const onDestroy = (device: Device) => setDeleteModal(device);
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
              <button
                type="button"
                data-modal-toggle="add-device-modal"
                className="w-full text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
                onClick={() => setNewModal(true)}
              >
                <NewIcon />
                追加
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <DeviceTable
                devices={filteredDevices}
                onEdit={onEdit}
                onDestroy={onDestroy}
              />
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
      <DeleteDeviceModal
        show={!!deleteModal}
        onClose={() => setDeleteModal(null)}
      />
    </>
  );
};

export default DeviceIndex;
