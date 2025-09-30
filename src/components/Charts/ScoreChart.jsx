import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FFBB28'];

function ScoreChart({ scoreData }) {
  return (
    <div style={{ width: 300, height: 250 }}>
      <h3>Average Score</h3>
      <PieChart width={300} height={200}>
        <Pie
          data={scoreData}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
          label
        >
          {scoreData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ScoreChart;
