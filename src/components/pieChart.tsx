import { PieChart } from "react-minimal-pie-chart";

function PieCharts() {
  return (
    <PieChart
      data={[
        { title: "One", value: 16, color: "#05F300" },
        { title: "One", value: 16, color: "#EBC500" },
        { title: "One", value: 16, color: "#981EF8" },
        { title: "One", value: 16, color: "#FFD60A" },
        { title: "One", value: 16, color: "#FF6C02" },
        { title: "Two", value: 16, color: "#1EEBF8" },
        { title: "Three", value: 5, color: "#2DBD9B" },
      ]}
    />
  );
}

export default PieCharts;
