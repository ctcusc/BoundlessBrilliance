import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const mPieChart = ({ data, COLORS }) => {
  const options = {
    title: "Pie Chart",
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          options={options}
          dataKey="value"
          nameKey="name"
          innerRadius={25}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default mPieChart;
