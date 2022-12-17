import { useState } from "react";
import Chart from "react-apexcharts";
import "./CenterWidget.scss";

const CenterWidget = () => {
  const [chartData, setChartData] = useState({
    options: {
      colors: ["#0000FF", "#E91343", "#9C27B0"],
      markers: {
        colors: ["#222", "#222", "#222"],
      },
      grid: {
        row: {
          colors: ["transparent"],
        },
        column: {
          colors: ["transparent"],
        },
      },
      dataLabels: {
        style: {
          colors: ["transparent", "transparent"],
        },
      },
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "00:00",
          "03:00",
          "06:00",
          "09:00",
          "12:00",
          "18:00",
          "21:00",
        ],
      },
    },
    series: [
      {
        name: "orders",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "canceled",
        data: [20, 10, 15, 29, 79, 80, 0, 22],
      },
    ],
  });

  return (
    <div className="center-widget">
      <div className="title">
        <span>Orders today</span>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
    </div>
  );
};

export default CenterWidget;
