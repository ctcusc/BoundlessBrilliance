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
      <PieChart margin={{top: 10, right: 10, bottom: 30, left: 10}}>
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
        <Legend formatter={(value) => <span style={{ 
                                              fontSize: '10px',
                                              fontFamily: "Avenir",
                                          }}>{value}</span>} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default mPieChart;
