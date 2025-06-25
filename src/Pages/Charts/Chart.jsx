import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ChartComponent = ({ data, xKey, yKey, title = 'Chart' }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow border max-w-3xl mx-auto my-6">
      <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey={yKey} fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
