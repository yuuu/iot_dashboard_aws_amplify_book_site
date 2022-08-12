import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateCertificateIoTMutation,
  DeleteCertificateIoTMutation,
} from "../API";
import * as mutations from "../graphql/mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateCertificateIoT = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (deviceID: string) => {
      const { data } = (await API.graphql({
        query: mutations.createCertificateIoT,
        variables: { deviceID },
      })) as GraphQLResult<CreateCertificateIoTMutation>;
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["device"]);
        toast.success(
          `${data?.createCertificateIoT?.certificateId}を作成しました`
        );
        onSuccess();
      },
      onError: () => {
        toast.error("証明書の作成に失敗しました");
      },
    }
  );
  return mutation.mutate;
};

export const useDeleteCertificateIoT = (
  id: string | undefined,
  onSuccess: () => void
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async () => {
      const { data } = (await API.graphql({
        query: mutations.deleteCertificateIoT,
        variables: { id },
      })) as GraphQLResult<DeleteCertificateIoTMutation>;
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success(
          `${data?.deleteCertificateIoT?.certificateId}を削除しました`
        );
        queryClient.invalidateQueries(["device"]);
        onSuccess();
      },
      onError: () => {
        toast.error("証明書の削除に失敗しました");
      },
    }
  );
  return mutation.mutate;
};
