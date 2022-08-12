export type DeviceValue = {
  id: string;
  deviceID: string;
  temperature: number;
  humid: number;
  pressure: number;
  status: "online" | "offline";
  timestamp: number;
};
