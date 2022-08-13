import React from "react";
import ReactModal from "react-modal";
import CloseModalIcon from "../icons/CloseModalIcon";
import DangerIcon from "../icons/DangerIcon";
import { Device } from "../../API";
import { useDeleteDevice } from "../../hooks/useDevices";

type Props = {
  show: boolean;
  device: Device | null;
  onClose: () => void;
};

const DeleteDeviceModal: React.FC<Props> = ({ show, device, onClose }) => {
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
  const deleteDevice = useDeleteDevice(device, onClose);

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
        <DangerIcon />
        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
          このデバイスを削除しても良いですか？
        </h3>
        <a
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 cursor-pointer"
          onClick={() => deleteDevice()}
        >
          はい
        </a>
        <a
          className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-sky-600 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center cursor-pointer"
          onClick={() => onClose()}
        >
          いいえ
        </a>
      </div>
    </ReactModal>
  );
};

export default DeleteDeviceModal;
