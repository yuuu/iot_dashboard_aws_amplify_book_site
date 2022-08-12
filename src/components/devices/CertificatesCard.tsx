import { useState } from "react";
import { Certificate } from "../../API";
import Card from "../Card";
import DeleteButton from "./DeleteButton";
import DeleteCertificateModal from "./DeleteCertificateModal";
import NewButton from "./NewButton";

type Props = {
  certificates: (Certificate | null)[] | undefined;
};

const CertificatesCard: React.FC<Props> = ({ certificates }) => {
  const [deleteModal, setDeleteModal] = useState<Certificate | null>(null);
  const onDestroy = (certificate: Certificate) => setDeleteModal(certificate);
  const onCreate = () => {};
  return (
    <Card className="sm:p-6 xl:p-8">
      <div className="sm:flex md:w-1/2 mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">証明書</h3>
        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
          <NewButton onClick={() => null} />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:w-1/2">
        {certificates?.map(
          (certificate) =>
            certificate && (
              <li className="flex items-center justify-between">
                <span>{certificate.certificateId}</span>
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
    </Card>
  );
};

export default CertificatesCard;
