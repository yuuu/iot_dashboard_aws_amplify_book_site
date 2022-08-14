import { toast } from "react-toastify";
import devices, {
  CreateDeviceInput,
  UpdateDeviceInput,
  Device,
} from "../data/devices";

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

export const useUpdateDevice = (
  id: string | undefined,
  onSuccess: () => void
) => {
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
