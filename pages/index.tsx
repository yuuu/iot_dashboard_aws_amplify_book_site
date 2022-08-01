import type { NextPage } from "next";
import PinnedDeviceTableCard from "../src/components/dashboard/PinnedDeviceTableCard";
import TemperatureChartCard from "../src/components/dashboard/TemperatureChartCard";
import HumidChartCard from "../src/components/dashboard/HumidChartCard";
import AtmosphericPressureChartCard from "../src/components/dashboard/AtmosphericPressureChartCard";
import ClockCard from "../src/components/dashboard/ClockCard";
import DeviceCountCard from "../src/components/dashboard/DeviceCountCard";

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="mb-4 w-full grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-1 gap-4 col-span-1 xl:col-span-3 2xl:col-span-1">
          <ClockCard />
          <DeviceCountCard className="xl:col-span-2 2xl:col-span-1" />
        </div>
        <TemperatureChartCard />
        <HumidChartCard />
        <AtmosphericPressureChartCard />
      </div>
      <div className="mb-4 w-full grid grid-cols-1 xl:gap-4">
        <PinnedDeviceTableCard />
      </div>
    </>
  );
};

export default Dashboard;
