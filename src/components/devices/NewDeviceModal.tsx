import React from "react";
import ReactModal from "react-modal";
import DeviceForm from "./DeviceForm";
import CloseModalIcon from "../icons/CloseModalIcon";
import { useCreateDevice } from "../../hooks/useDevices";

type Props = {
  show: boolean;
  onClose: () => void;
};

const NewDeviceModal: React.FC<Props> = ({ show, onClose }) => {
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
  const createDevice = useCreateDevice(onClose);

  return (
    <ReactModal isOpen={show} style={modalStyle} ariaHideApp={false}>
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">デバイス新規登録</h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={onClose}
        >
          <CloseModalIcon />
        </button>
      </div>
      <div className="p-6 space-y-6">
        <DeviceForm onCreate={createDevice} />
      </div>
    </ReactModal>
  );
};

export default NewDeviceModal;
