import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { week: 'Week 1', growth: 4000 },
  { week: 'Week 2', growth: 3000 },
  { week: 'Week 3', growth: 2000 },
  { week: 'Week 4', growth: 2780 },
  { week: 'Week 5', growth: 1890 },
];

const materialsData = [
  { name: 'Cement', value: 400 },
  { name: 'Steel', value: 300 },
  { name: 'Wood', value: 300 },
  { name: 'Bricks', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
  return (
    <div className="mt-6">
      <h2 className="text-white text-2xl mb-4">Construction Growth Report</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="week" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="growth" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2 className="text-white text-2xl mb-4 mt-8">Materials in Use</h2>
      <ResponsiveContainer width="100%" height={700}>
        <PieChart>
          <Pie
            data={materialsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={200}
            fill="#8884d8"
          >
            {materialsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;