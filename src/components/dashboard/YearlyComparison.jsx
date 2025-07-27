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

const YearlyComparison = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: '2023',
        data: [null, null, null, 1000010],
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
      {
        label: '2024 (Projected)',
        data: [3300000, 3300000, 3300000, 3300000],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)',
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
        text: 'Yearly Performance Comparison (¢)',
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
            return '¢' + (value / 1000000).toFixed(1) + 'M';
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Year-over-Year Growth</h2>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-indigo-700">2023 Q4 Revenue</p>
          <p className="text-2xl font-semibold text-indigo-900">¢1.00M</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-emerald-700">2024 Projection</p>
          <p className="text-2xl font-semibold text-emerald-900">¢13.20M</p>
          <p className="text-xs text-emerald-600">+1,220% growth</p>
        </div>
      </div>
    </div>
  );
};

export default YearlyComparison;