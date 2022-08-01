import { Device } from "../types/device";

const devices: Device[] = [
  {
    id: "1",
    name: "デバイスA",
    temperature: 30,
    humid: 40,
    pressure: 1000,
    status: "online",
    pinned: "pinned",
  },
  {
    id: "2",
    name: "デバイスB",
    temperature: 10,
    humid: 89,
    pressure: 950,
    status: "online",
    pinned: "pinned",
  },
  {
    id: "3",
    name: "デバイスC",
    temperature: 23,
    humid: 67,
    pressure: 1013,
    status: "online",
    pinned: "pinned",
  },
  {
    id: "4",
    name: "デバイスD",
    temperature: 19,
    humid: 39,
    pressure: 1003,
    status: "offline",
    pinned: "pinned",
  },
];

export default devices;
