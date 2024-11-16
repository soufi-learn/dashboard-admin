import React from "react";
import { Line } from "react-chartjs-2";
import { chartData } from "../../data/ChartData";
import { chartOptions } from "../../config/ChartOptions";
import { registerChartComponents } from "../../config/RegisterChartComponents";

registerChartComponents();

const Chart = ({ title }) => {
  // Add the monotonic options inside the dataset
  const updatedChartData = {
    ...chartData,
    datasets: chartData.datasets.map((dataset) => ({
      ...dataset,
      tension: 0.4, // This adds the smoothness to the line
      cubicInterpolationMode: "monotone", // Ensures monotonic curve interpolation
    })),
  };

  return (
    <div className="mt-10">
      <h3 className="transition-all text-dark-darker dark:text-white">
        {title}
      </h3>
      <Line data={updatedChartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
