import NewIcon from "../../../src/components/icons/NewIcon";

type Props = {
  onClick: () => void;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      data-modal-toggle="add-device-modal"
      className="w-full text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-600 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
      onClick={onClick}
    >
      <NewIcon />
      追加
    </button>
  );
};

export default DeleteButton;
