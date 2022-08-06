import React from "react";
import { useForm } from "react-hook-form";
import { Device } from "../../API";
import { InputDevice } from "../../types/device";

type Props = {
  device?: Device;
  onSubmit: (data: InputDevice) => void;
};

const DeviceForm: React.FC<Props> = ({ device, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDevice>({ defaultValues: { name: device?.name } });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            デバイス名
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
            {...register("name", { required: true })}
          />
          {errors.name && <small className="text-red-500">必須項目です</small>}
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="pinned"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            ピン留め
          </label>
          <select
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-800 focus:border-sky-800 block w-full p-2.5"
            {...register("pinned", { required: true })}
          >
            <option value="pinned">ピン留めする</option>
            <option value="notPinned">ピン留めしない</option>
          </select>
          {errors.name && <small className="text-red-500">必須項目です</small>}
        </div>
      </div>
      <div className="items-center py-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          保存
        </button>
      </div>
    </form>
  );
};

export default DeviceForm;
