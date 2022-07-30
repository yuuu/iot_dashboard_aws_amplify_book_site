import { Device } from "../types/device";

const devices: Device[] = [
  {
    id: "1",
    deviceName: "デバイスA",
    temperature: 30,
    humid: 40,
    pressure: 1000,
    status: "online",
  },
  {
    id: "2",
    deviceName: "デバイスB",
    temperature: 10,
    humid: 89,
    pressure: 950,
    status: "online",
  },
  {
    id: "3",
    deviceName: "デバイスC",
    temperature: 23,
    humid: 67,
    pressure: 1013,
    status: "online",
  },
  {
    id: "4",
    deviceName: "デバイスD",
    temperature: 19,
    humid: 39,
    pressure: 1003,
    status: "offline",
  },
];

export default devices;
