import CurrentMeasurement from "./currentMeasurement";
import Certificate from "../types/certificate";

type Device = {
  id: string;
  name: string;
  pinned: "pinned" | "notPinned";
  currentMeasurement?: CurrentMeasurement;
  certificates?: { items: Certificate[] };
};

export default Device;
