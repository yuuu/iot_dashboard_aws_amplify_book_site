import type { NextPage } from "next";
import Breadcrumbs from "../../src/components/Breadcrumbs";
import DeviceStatus from "../../src/components/DeviceStatus";
import BarGraph from "../../src/components/BarGraph";
import devices from "../../src/data/devices";

const DeviceList: NextPage = () => {
  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumbs pages={[{ name: "Devices", link: "/devices" }]} />
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              All devices
            </h1>
          </div>
          <div className="sm:flex">
            <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
              <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="devices-search" className="sr-only">
                  Search
                </label>
                <div className="mt-1 relative lg:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="devices-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                    placeholder="Search for devices"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <button
                type="button"
                data-modal-toggle="add-device-modal"
                className="w-1/2 text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
              >
                <svg
                  className="-ml-1 mr-2 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add device
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <table className="table-fixed min-w-full divide-y divide-gray-200">
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
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      温度
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      湿度
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      気圧
                    </th>
                    <th scope="col" className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {devices.map(
                    ({
                      deviceName,
                      temperature,
                      humid,
                      pressure,
                      status,
                      key,
                    }) => (
                      <tr key={key} className="hover:bg-gray-100">
                        <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                          <div className="text-base font-semibold text-gray-900">
                            {deviceName}
                          </div>
                        </td>
                        <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
                          <DeviceStatus status={status} />
                        </td>
                        <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
                          <BarGraph
                            value={temperature}
                            unit="℃"
                            max={50}
                            min={-10}
                          />
                        </td>
                        <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
                          <BarGraph value={humid} unit="%" max={100} min={0} />
                        </td>
                        <td className="px-4 align-middle text-xs whitespace-nowrap p-4">
                          <BarGraph
                            value={pressure}
                            unit="hPa"
                            max={1100}
                            min={870}
                          />
                        </td>
                        <td className="p-4 whitespace-nowrap space-x-2 text-right">
                          <button
                            type="button"
                            data-modal-toggle="device-modal"
                            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                          >
                            <svg
                              className="mr-2 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Show
                          </button>
                          <button
                            type="button"
                            data-modal-toggle="device-modal"
                            className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                          >
                            <svg
                              className="mr-2 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Edit
                          </button>
                          <button
                            type="button"
                            data-modal-toggle="delete-device-modal"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                          >
                            <svg
                              className="mr-2 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
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

      <div
        className="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="device-modal"
      >
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Edit device</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="device-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-600 block w-full p-2.5"
                      placeholder="Bonnie"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="Green"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-800 block w-full p-2.5"
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone-number"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-800 block w-full p-2.5"
                      placeholder="e.g. +(12)3456 789"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="department"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="Development"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="number"
                      name="company"
                      id="company"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="123456"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="current-password"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current-password"
                      id="current-password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="new-password"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="items-center p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="add-device-modal"
      >
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Add new device</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="add-device-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="Bonnie"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="Green"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-600 block w-full p-2.5"
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone-number"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="e.g. +(12)3456 789"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="department"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="Development"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="number"
                      name="company"
                      id="company"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
                      placeholder="123456"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="items-center p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Add device
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="delete-device-modal"
      >
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="delete-device-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
              <svg
                className="w-20 h-20 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                Are you sure you want to delete this device?
              </h3>
              <a
                href="#"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                Yes, I am sure
              </a>
              <a
                href="#"
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-sky-600 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-device-modal"
              >
                No, cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceList;
