import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const mPieChart = ({data, COLORS}) => {
  const options = {
    title: 'Pie Chart',
    responsive: true,
    maintainAspectRatio: false,
    cutout: 0,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
  };
  console.log(data);
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          options={options}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default mPieChart;
