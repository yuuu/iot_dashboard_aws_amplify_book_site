import React from "react";
import ReactModal from "react-modal";
import CloseModalIcon from "../icons/CloseModalIcon";
import Certificate from "../../types/certificate";
import InfomationIcon from "../icons/InfomationIcon";
import fileDownload from "js-file-download";

type Props = {
  show: boolean;
  certificate: Certificate | null;
  onClose: () => void;
};

const DeleteCertificateModal: React.FC<Props> = ({
  show,
  certificate,
  onClose,
}) => {
  const modalStyle = {
    overlay: {
      zIndex: 40,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 50,
    },
  };

  if (!certificate) {
    return <></>;
  }

  const certificateFile = `certificate-${certificate.id}.pem`;
  const publicKeyFile = `public-${certificate.id}.key`;
  const privateKeyFile = `privare-${certificate.id}.key`;

  return (
    <ReactModal isOpen={show} style={modalStyle} ariaHideApp={false}>
      <div className="flex justify-end p-2">
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={() => onClose()}
        >
          <CloseModalIcon />
        </button>
      </div>
      <div className="p-6 pt-0 text-center">
        <InfomationIcon />
        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
          作成した証明書をダウンロードしてください。
        </h3>
        <ul className="flex flex-col items-start mb-6 space-y-2 text-sky-800 underline cursor-pointer">
          <li>
            <a
              onClick={() =>
                fileDownload(certificate.certificatePem ?? "", certificateFile)
              }
            >
              {certificateFile}
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                fileDownload(certificate.publicKey ?? "", publicKeyFile)
              }
            >
              {publicKeyFile}
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                fileDownload(certificate.privateKey ?? "", privateKeyFile)
              }
            >
              {privateKeyFile}
            </a>
          </li>
        </ul>
        <a
          className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-sky-600 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center cursor-pointer"
          onClick={() => onClose()}
        >
          閉じる
        </a>
      </div>
    </ReactModal>
  );
};

export default DeleteCertificateModal;
