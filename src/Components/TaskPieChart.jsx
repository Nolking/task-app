/* eslint-disable react/prop-types */
import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import { PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const TaskPieChart = ({ completedTasks, totalTasks }) => {
  // Configure the pie chart data and options
  const data = {
    labels: ["Completed Tasks", "Remaining Tasks"],
    datasets: [
      {
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ["#5285EC", "#E8ECEC"],
        hoverBackgroundColor: ["#5285EC", "#E8ECEC"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  // Use the Pie component from react-chartjs-2 to render the chart
  return <Pie data={data} options={options} />;
};

export default TaskPieChart;
