import measurements from "../data/measurements";

export const useFetchMeasurements = (deviceID: string) => {
  return measurements.filter(
    (measurement) => measurement.deviceID === deviceID
  );
};
