export const chartOptions = {
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
