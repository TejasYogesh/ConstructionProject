import React from 'react';
import Chart from './Chart'; // Import the Chart component

const Dashboard = ({ user }) => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-white text-3xl mb-4">Dashboard</h1>
      <p className="text-gray-400">Welcome, {user.username}!</p>
      <p className="text-gray-400">Construction Site Number: {user.siteNumber}</p>

      {/* Add your charts, graphs, and other components here */}
      <div className="mt-6">
        <h2 className="text-white text-2xl">Construction Progress Report</h2>
        {/* Mock data for demonstration */}
        <div className="bg-gray-800 p-4 rounded mt-4">
          <h3 className="text-white">Estimated Cost: $500,000</h3>
          <h3 className="text-white">Logistics: On Schedule</h3>
          <h3 className="text-white">Equipment Operations: Active</h3>
          <h3 className="text-white">Workforce Management: 50 Workers</h3>
        </div>
      </div>

      {/* Include the Chart component */}
      <Chart />
    </div>
  );
};

export default Dashboard;