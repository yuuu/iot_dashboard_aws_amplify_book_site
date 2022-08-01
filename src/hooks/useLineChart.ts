import { useCallback } from "react";
import { DeviceValue } from "../types/deviceValue";
import dayjs from "dayjs";

const useLineChart = (deviceValues: DeviceValue[]) => {
  const options = useCallback(
    () => ({
      responsive: true,
      interaction: {
        mode: "index" as const,
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          title: {
            text: "温度",
            display: true,
          },
          type: "linear" as const,
          display: true,
          position: "left" as const,
        },
        y1: {
          title: {
            text: "湿度",
            display: true,
          },
          type: "linear" as const,
          display: true,
          position: "left" as const,
          grid: {
            drawOnChartArea: false,
          },
        },
        y2: {
          title: {
            text: "気圧",
            display: true,
          },
          type: "linear" as const,
          display: true,
          position: "right" as const,
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    }),
    []
  );

  const labels = useCallback(
    () =>
      deviceValues.map((deviceValue) =>
        dayjs(deviceValue.timestamp).format("MM/DD hh:mm")
      ),
    [deviceValues]
  );

  const data = useCallback(
    () => ({
      labels: labels(),
      datasets: [
        {
          label: "温度",
          data: deviceValues.map((deviceValue) => deviceValue.temperature),
          borderColor: "#075985",
          backgroundColor: "#075985",
          yAxisID: "y",
        },
        {
          label: "湿度",
          data: deviceValues.map((deviceValue) => deviceValue.humid),
          borderColor: "#FACC15",
          backgroundColor: "#FACC15",
          yAxisID: "y1",
        },
        {
          label: "気圧",
          data: deviceValues.map((deviceValue) => deviceValue.pressure),
          borderColor: "#DB2777",
          backgroundColor: "#DB2777",
          yAxisID: "y2",
        },
      ],
    }),
    [deviceValues]
  );

  return {
    options: options(),
    data: data(),
  };
};

export default useLineChart;
