import { Device } from "../../src/API";
import dayjs from "dayjs";

export const useDeviceUtils = () => ({
  isOnline: (device: Device): boolean => {
    const threshold = dayjs().subtract(5, "m").unix();
    const timestamp = device?.currentMeasurement?.timestamp;
    return !!timestamp && timestamp >= threshold;
  },
  isComfortableTemperature: (device: Device): boolean => {
    const temperature = device?.currentMeasurement?.temperature;
    if (!temperature) return false;

    return 15 <= temperature && temperature <= 25;
  },
  isComfortableHumid: (device: Device): boolean => {
    const humid = device?.currentMeasurement?.humid;
    if (!humid) return false;

    return 40 <= humid && humid <= 60;
  },
  isComfortablePressure: (device: Device): boolean => {
    const pressure = device?.currentMeasurement?.pressure;
    if (!pressure) return false;

    return 1008 <= pressure && pressure <= 1018;
  },
});
