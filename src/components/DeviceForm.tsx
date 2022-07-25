import React from "react";

const DeviceForm: React.FC = () => {
  return (
    <form action="#">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            デバイス名
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
      </div>
    </form>
  );
};

export default DeviceForm;
