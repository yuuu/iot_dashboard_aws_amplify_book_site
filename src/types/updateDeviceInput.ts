type UpdateDeviceInput = {
  id: string;
  name: string;
  pinned: "pinned" | "notPinned";
};

export default UpdateDeviceInput;
