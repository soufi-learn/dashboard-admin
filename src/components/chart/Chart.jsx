// src/MyChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, // Import the CategoryScale
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartData } from "../../data/ChartData";

// Register the necessary components including CategoryScale
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, // Register the CategoryScale here
  ArcElement
);

const Chart = () => {
  const options = {
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        rtl: true,
        position: "top",
        labels: {
          textAlign: "right",
          font: {
            family: "'dana-medium', Courier, monospace",
            size: 14,
          },
        },
      },
      tooltip: {
        rtl: true,
        titleFont: {
          family: "'dana-medium', cursive, sans-serif",
        },
        bodyFont: {
          family: "'dana-medium', cursive, sans-serif",
        },
      },
    },
    scales: {
      x: {
        reverse: true,
        ticks: {
          font: {
            family: "'dana-medium', Times, serif",
            size: 12,
          },
        },
      },
      y: {
        position: "right",
        ticks: {
          font: {
            family: "'dana-medium', sans-serif",
            size: 12,
          },
        },
      },
    },
  };
  return (
    <div className="mt-10">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
