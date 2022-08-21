import dayjs from "dayjs";
import Device from "../types/device";

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
      timestamp: dayjs().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
    },
  },
  {
    id: "2",
    name: "デバイスB",
    pinned: "notPinned",
    currentMeasurement: {
      deviceID: "2",
      temperature: 10,
      humid: 89,
      pressure: 950,
      timestamp: dayjs()
        .subtract(10, "m")
        .format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
    },
  },
  {
    id: "3",
    name: "デバイスC",
    pinned: "pinned",
    currentMeasurement: {
      deviceID: "3",
      temperature: 23,
      humid: 67,
      pressure: 1013,
      timestamp: dayjs().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
    },
  },
  {
    id: "4",
    name: "デバイスD",
    pinned: "notPinned",
    currentMeasurement: {
      deviceID: "4",
      temperature: 19,
      humid: 39,
      pressure: 1003,
      timestamp: dayjs()
        .subtract(10, "m")
        .format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
    },
  },
];

export default devices;
