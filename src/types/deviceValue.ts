export type DeviceValue = {
  id: string;
  deviceId: string;
  temperature: number;
  humid: number;
  pressure: number;
  status: "online" | "offline";
  timestamp: number;
};
