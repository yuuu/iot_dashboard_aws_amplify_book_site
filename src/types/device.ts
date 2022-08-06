export type Device = {
  id: string;
  name: string;
  temperature: number;
  humid: number;
  pressure: number;
  status: "online" | "offline";
  pinned: "pinned" | "notPinned";
};

export type InputDevice = {
  name: string;
  pinned: "pinned" | "notPinned";
};
