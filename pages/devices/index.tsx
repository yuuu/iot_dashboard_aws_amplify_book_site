import { useState } from "react";
import type { NextPage } from "next";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import devices from "../../src/data/devices";
import NewDeviceModal from "../../src/components/devices/NewDeviceModal";
import EditDeviceModal from "../../src/components/devices/EditDeviceModal";
import NewIcon from "../../src/components/icons/NewIcon";
import DeleteDeviceModal from "../../src/components/devices/DeleteDeviceModal";
import DeviceTable from "../../src/components/devices/DeviceTable";
import { Device } from "../../src/types/device";

const DeviceIndex: NextPage = () => {
  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState<Device | null>(null);
  const [deleteModal, setDeleteModal] = useState<Device | null>(null);

  const onEdit = (device: Device) => setEditModal(device);
  const onDestroy = (device: Device) => setDeleteModal(device);

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
                devices={devices}
                onEdit={onEdit}
                onDestroy={onDestroy}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <span className="text-sm font-normal text-gray-500">
            Showing <span className="text-gray-900 font-semibold">1-20</span> of{" "}
            <span className="text-gray-900 font-semibold">2290</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex-1 text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
          >
            <svg
              className="-ml-1 mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Previous
          </a>
          <a
            href="#"
            className="flex-1 text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
          >
            Next
            <svg
              className="-mr-1 ml-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
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
