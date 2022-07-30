export type Device = {
  id: string;
  deviceName: string;
  temperature: number;
  humid: number;
  pressure: number;
  status: "online" | "offline";
};
