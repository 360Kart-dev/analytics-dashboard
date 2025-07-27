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

const TransactionTrends = () => {
  // Sample data for the last 30 days
  const generateDailyData = () => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      // Base around 36,184 with some variance
      data.push(Math.round(36184 * (0.9 + Math.random() * 0.2)));
    }
    return data;
  };

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Daily Transaction Volume (¢)',
        data: generateDailyData(),
        borderColor: 'rgba(5, 150, 105, 1)',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
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
        text: 'Daily Transaction Trends (Last 30 Days)',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
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
      <h2 className="text-lg font-medium text-gray-900 mb-4">Transaction Trends</h2>
      <div className="h-96">
        <Line data={data} options={options} />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-emerald-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-emerald-700">Avg Daily Volume</p>
          <p className="text-2xl font-semibold text-emerald-900">¢36,184</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-emerald-700">Monthly Volume</p>
          <p className="text-2xl font-semibold text-emerald-900">¢1.10M</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <p className="text-sm font-medium text-emerald-700">Yearly Projection</p>
          <p className="text-2xl font-semibold text-emerald-900">¢13.20M</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionTrends;