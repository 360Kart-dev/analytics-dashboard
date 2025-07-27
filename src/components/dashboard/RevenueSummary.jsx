"use client"

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueSummary = () => {
  const data = {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Revenue (¢)',
        data: [300000, 350000, 350010],
        backgroundColor: 'rgba(79, 70, 229, 0.7)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1,
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
        text: 'Q4 2023 Revenue Breakdown',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '¢' + (value / 1000).toFixed(0) + 'K';
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-700">Avg Monthly Revenue</p>
          <p className="text-2xl font-semibold text-indigo-900">¢333,337</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-700">Avg Daily Revenue</p>
          <p className="text-2xl font-semibold text-indigo-900">¢10,870</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-700">Projected Yearly</p>
          <p className="text-2xl font-semibold text-indigo-900">¢4.00M</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueSummary;