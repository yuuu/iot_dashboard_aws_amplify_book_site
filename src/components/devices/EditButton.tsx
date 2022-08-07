import EditIcon from "../icons/EditIcon";

type Props = {
  onClick: () => void;
};

const EditButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      data-modal-toggle="device-modal"
      className="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
      onClick={onClick}
    >
      <EditIcon />
      <span className="hidden md:inline">編集</span>
    </button>
  );
};

export default EditButton;
