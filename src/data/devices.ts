import dayjs from "dayjs";

export type CurrentMeasurement = {
  deviceID: string;
  temperature: number;
  humid: number;
  pressure: number;
  timestamp: string;
};

export type Device = {
  id: string;
  name: string;
  pinned: "pinned" | "notPinned";
  currentMeasurement: CurrentMeasurement;
};

export type CreateDeviceInput = {
  name: string;
  pinned: "pinned" | "notPinned";
};

export type UpdateDeviceInput = {
  name: string;
  pinned: "pinned" | "notPinned";
};

const devices: Device[] = [
  {
    id: "1",
    name: "デバイスA",
    pinned: "pinned",
    currentMeasurement: {
      deviceID: "1",
      temperature: 30,
      humid: 40,
      pressure: 1000,
      timestamp: dayjs().format("YYYY-MM-DDTHH:mm:ss.SSSz"),
    },
  },
  {
    id: "2",
    name: "デバイスB",
    pinned: "pinned",
    currentMeasurement: {
      deviceID: "1",
      temperature: 10,
      humid: 89,
      pressure: 950,
      timestamp: dayjs().format("YYYY-MM-DDTHH:mm:ss.SSSz"),
    },
  },
  {
    id: "3",
    name: "デバイスC",
    pinned: "pinned",
    currentMeasurement: {
      deviceID: "1",
      temperature: 23,
      humid: 67,
      pressure: 1013,
      timestamp: dayjs().format("YYYY-MM-DDTHH:mm:ss.SSSz"),
    },
  },
  {
    id: "4",
    name: "デバイスD",
    pinned: "pinned",
    currentMeasurement: {
      deviceID: "1",
      temperature: 19,
      humid: 39,
      pressure: 1003,
      timestamp: dayjs().format("YYYY-MM-DDTHH:mm:ss.SSSz"),
    },
  },
];

export default devices;
