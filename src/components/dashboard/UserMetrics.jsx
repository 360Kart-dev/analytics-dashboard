"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserMetrics = () => {
  const userData = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Active Users',
        data: [15000, 18000, 20300, 22000, 25000, 50000],
        borderColor: 'rgba(79, 70, 229, 1)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Sellers',
        data: [500, 700, 970, 1200, 1500, 3000],
        borderColor: 'rgba(236, 72, 153, 1)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Growth Trend',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">User Analytics</h2>
      <div className="h-80">
        <Line data={userData} options={options} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-pink-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-pink-700">New Users/Month</p>
          <p className="text-2xl font-semibold text-pink-900">1,250</p>
          <p className="text-xs text-pink-600">(~41 daily)</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-700">Growth Rate</p>
          <p className="text-2xl font-semibold text-indigo-900">2.5%</p>
          <p className="text-xs text-indigo-600">monthly</p>
        </div>
      </div>
    </div>
  );
};

export default UserMetrics;