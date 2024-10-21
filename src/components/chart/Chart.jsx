import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { chartData } from "../../data/ChartData";
import { chartOptions } from "../../config/ChartOptions";
import { registerChartComponents } from "../../config/RegisterChartComponents";

registerChartComponents();

const Chart = () => {
  return (
    <div className="mt-10">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
