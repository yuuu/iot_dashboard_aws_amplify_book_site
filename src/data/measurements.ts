import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import Measurement from "../types/measurement";

const timestamps = [...Array(5).keys()]
  .map((n) => dayjs().subtract(n, "minute").format("YYYY-MM-DDTHH:mm:ss.SSSz"))
  .reverse();

const measurements: Measurement[] = timestamps.map((timestamp, index) => ({
  id: `1-${index}`,
  deviceID: "1",
  temperature: faker.datatype.number({ min: -1000, max: 1000 }),
  humid: faker.datatype.number({ min: -1000, max: 1000 }),
  pressure: faker.datatype.number({ min: -1000, max: 1000 }),
  timestamp,
}));

export default measurements;
