import React, { useEffect, useRef, FC } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface MyChartProps {
  data: number[];
  labels: string[];
  backgroundColor: string[];
  borderColor: string[];
}

const MyChart: FC<MyChartProps> = ({
  data,
  labels,
  backgroundColor,
  borderColor,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: Chart<"bar"> | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return; // Check if context is available

      const config: ChartConfiguration<"bar"> = {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "",
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 1000, // Set the maximum value for the y-axis
              ticks: {
                stepSize: 200,
                callback: function (value) {
                  return value === 0 ||
                    value === 200 ||
                    value === 400 ||
                    value === 600 ||
                    value === 800 ||
                    value === 1000
                    ? value
                    : "";
                },
              },
            },
          },
        },
      };

      chart = new Chart(ctx, config);
    }

    return () => {
      if (chart) {
        chart.destroy(); // Ensure the chart instance is destroyed when the component unmounts
      }
    };
  }, [data, labels, backgroundColor, borderColor]);

  return <canvas ref={chartRef} />;
};

export default MyChart;
