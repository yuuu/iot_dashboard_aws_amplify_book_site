import DeleteIcon from "../icons/DeleteIcon";

type Props = {
  onClick: () => void;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      data-modal-toggle="delete-device-modal"
      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
      onClick={onClick}
    >
      <DeleteIcon />
      <span className="hidden md:inline">削除</span>
    </button>
  );
};

export default DeleteButton;
