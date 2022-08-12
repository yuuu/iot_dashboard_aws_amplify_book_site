import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import { DeviceValue } from "../types/deviceValue";

const statuses: Array<"online" | "offline"> = ["online", "offline"];

const timestamps = [...Array(5).keys()]
  .map((n) => dayjs().subtract(n, "minute"))
  .reverse();

const deviceValues: DeviceValue[] = timestamps.map((timestamp, index) => ({
  id: `1-${index}`,
  deviceID: "1",
  temperature: faker.datatype.number({ min: -1000, max: 1000 }),
  humid: faker.datatype.number({ min: -1000, max: 1000 }),
  pressure: faker.datatype.number({ min: -1000, max: 1000 }),
  status: statuses[Math.floor(Math.random() * statuses.length)],
  timestamp: timestamp.valueOf(),
}));

export default deviceValues;
