export type Device = {
  id: string;
  name: string;
  temperature: number;
  humid: number;
  pressure: number;
  status: "online" | "offline";
  pinned: "pinned" | "notPinned";
};
