import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import {
  GetDeviceQuery,
  ListDevicesQuery,
  CreateDeviceMutation,
  UpdateDeviceMutation,
  DeleteDeviceMutation,
} from "../../src/API";
import * as queries from "../../src/graphql/queries";
import * as mutations from "../../src/graphql/mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InputDevice } from "../../src/types/device";
import { toast } from "react-toastify";

export const useFetchDevices = () => {
  const { data: devices } = useQuery(["devices"], async () => {
    const { data } = (await API.graphql({
      query: queries.listDevices,
    })) as GraphQLResult<ListDevicesQuery>;
    return data?.listDevices?.items.flatMap((d) => (d === null ? [] : [d]));
  });
  return devices;
};

export const useFetchDevice = (id: string) => {
  const { data: device } = useQuery(["device"], async () => {
    const { data } = (await API.graphql({
      query: queries.getDevice,
      variables: { id },
    })) as GraphQLResult<GetDeviceQuery>;
    return data?.getDevice;
  });
  return device;
};

export const useCreateDevice = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (input: InputDevice) => {
      const { data } = (await API.graphql({
        query: mutations.createDevice,
        variables: { input },
      })) as GraphQLResult<CreateDeviceMutation>;
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["devices"]);
        toast.success(`${data?.createDevice?.name}を作成しました`);
        onSuccess();
      },
      onError: () => {
        toast.error("デバイスの作成に失敗しました");
      },
    }
  );
  return mutation.mutate;
};

export const useUpdateDevice = (
  id: string | undefined,
  onSuccess: () => void
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (input: InputDevice) => {
      const { data } = (await API.graphql({
        query: mutations.updateDevice,
        variables: { input: { id, ...input } },
      })) as GraphQLResult<UpdateDeviceMutation>;
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success(`${data?.updateDevice?.name}を更新しました`);
        queryClient.invalidateQueries(["devices"]);
        onSuccess();
      },
      onError: () => {
        toast.error("デバイスの更新に失敗しました");
      },
    }
  );
  return mutation.mutate;
};

export const useDeleteDevice = (
  id: string | undefined,
  onSuccess: () => void
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async () => {
      const { data } = (await API.graphql({
        query: mutations.deleteDevice,
        variables: { input: { id } },
      })) as GraphQLResult<DeleteDeviceMutation>;
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success(`${data?.deleteDevice?.name}を削除しました`);
        queryClient.invalidateQueries(["devices"]);
        onSuccess();
      },
      onError: () => {
        toast.error("デバイスの削除に失敗しました");
      },
    }
  );
  return mutation.mutate;
};
