import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props) {
  const data = {
    datasets: [
      {
        label:["product","Sales"],
        data: [200,500],
        backgroundColor: ["rgba(106, 210, 255, 1)", "rgba(67, 24, 255, 1)"],
        
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  return (
    <div
      style={{
        height: 200,
        width: 200,
        display: "flex",
        margin: "auto",
        marginTop: -10,
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
