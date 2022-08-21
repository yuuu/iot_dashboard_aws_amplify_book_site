import { toast } from "react-toastify";
import devices from "../data/devices";
import Device from "../types/device";
import CreateDeviceInput from "../types/createDeviceInput";
import UpdateDeviceInput from "../types/updateDeviceInput";

export const useFetchDevices = (): Device[] => {
  return devices as Device[];
};

export const useFetchDevice = (id: string): Device => {
  const device = devices.find((device) => device.id === id);
  return device as Device;
};

export const useCreateDevice = (onSuccess: () => void) => {
  return (input: CreateDeviceInput) => {
    console.log(input);
    toast.success(`${input.name}を作成しました`);
    onSuccess();
  };
};

export const useUpdateDevice = (onSuccess: () => void) => {
  return (input: UpdateDeviceInput) => {
    console.log(input);
    toast.success(`${input.name}を更新しました`);
    onSuccess();
  };
};

export const useDeleteDevice = (
  device: Device | null,
  onSuccess: () => void
) => {
  return () => {
    toast.success(`${device?.name}を削除しました`);
    onSuccess();
  };
};
