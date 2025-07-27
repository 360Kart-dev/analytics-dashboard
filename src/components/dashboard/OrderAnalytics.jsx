import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const OrderAnalytics = () => {
  const monthlyData = {
    labels: ['Approved', 'Cancelled', 'Pending'],
    datasets: [
      {
        data: [19360, 1540, 1100],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(249, 115, 22, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dailyData = {
    labels: ['Approved', 'Cancelled', 'Pending'],
    datasets: [
      {
        data: [637, 51, 36],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(249, 115, 22, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Status Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-md font-medium text-center text-gray-700 mb-2">Monthly Orders (22,000)</h3>
          <div className="h-64">
            <Doughnut data={monthlyData} options={{
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }} />
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium text-center text-gray-700 mb-2">Daily Orders (724)</h3>
          <div className="h-64">
            <Doughnut data={dailyData} options={{
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-green-700">Approved</p>
          <p className="text-xl font-semibold text-green-900">19,360</p>
          <p className="text-xs text-green-600">88% of total</p>
        </div>
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-red-700">Cancelled</p>
          <p className="text-xl font-semibold text-red-900">1,540</p>
          <p className="text-xs text-red-600">7% of total</p>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-orange-700">Pending</p>
          <p className="text-xl font-semibold text-orange-900">1,100</p>
          <p className="text-xs text-orange-600">5% of total</p>
        </div>
      </div>
    </div>
  );
};

export default OrderAnalytics;