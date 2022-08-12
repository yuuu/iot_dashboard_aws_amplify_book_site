import { useState } from "react";
import { Certificate, Device } from "../../API";
import { useCreateCertificateIoT } from "../../hooks/useCertificates";
import Card from "../Card";
import CreatedCertificateModal from "./CreatedCertificateModal";
import DeleteButton from "./DeleteButton";
import DeleteCertificateModal from "./DeleteCertificateModal";
import NewButton from "./NewButton";

type Props = {
  device: Device;
  certificates: (Certificate | null)[] | undefined;
};

const CertificatesCard: React.FC<Props> = ({ device, certificates }) => {
  const [deleteModal, setDeleteModal] = useState<Certificate | null>(null);
  const [createdCertificate, setCreatedCertificate] =
    useState<Certificate | null>(null);
  const onDestroy = (certificate: Certificate) => setDeleteModal(certificate);

  const createCertificateIoT = useCreateCertificateIoT(() => null);
  const onCreate = () => {
    createCertificateIoT(device.id);
  };

  return (
    <Card className="sm:p-6 xl:p-8">
      <div className="sm:flex mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">証明書</h3>
        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
          <NewButton onClick={onCreate} />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4">
        {certificates?.map(
          (certificate) =>
            certificate && (
              <li
                key={certificate.id}
                className="flex items-center justify-between space-x-4"
              >
                <span className="truncate">{certificate.certificateId}</span>
                <DeleteButton onClick={() => onDestroy(certificate)} />
              </li>
            )
        )}
      </ul>
      <DeleteCertificateModal
        show={!!deleteModal}
        certificate={deleteModal}
        onClose={() => setDeleteModal(null)}
      />
      <CreatedCertificateModal
        show={!!createdCertificate}
        certificate={createdCertificate}
        onClose={() => setCreatedCertificate(null)}
      />
    </Card>
  );
};

export default CertificatesCard;
