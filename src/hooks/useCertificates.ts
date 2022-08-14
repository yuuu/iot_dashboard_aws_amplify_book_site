import { toast } from "react-toastify";
import certificates, { Certificate } from "../data/certificates";

export const useCreateCertificateIoT = (
  onSuccess: (certificate: Certificate) => void
) => {
  return (deviceID: string) => {
    const certificate = certificates.find(
      (certificate) => certificate.deviceID == deviceID
    ) as Certificate;
    toast.success("証明書を作成しました");
    onSuccess(certificate);
  };
};

export const useDeleteCertificateIoT = (
  id: string | undefined,
  onSuccess: () => void
) => {
  return () => {
    toast.success("証明書を削除しました");
    onSuccess();
  };
};
