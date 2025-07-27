import React from 'react';
import RevenueSummary from '@/components/dashboard/RevenueSummary';
import OrderAnalytics from '@/components/dashboard/OrderAnalytics';
import TransactionTrends from '@/components/dashboard/TransactionTrends';
import PerformanceCards from '@/components/dashboard/PerformanceCards';
import YearlyComparison from '@/components/dashboard/YearlyComparison';
import UserMetrics from '@/components/dashboard/UserMetrics';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">360Kart Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Q4 2023</option>
                <option>2024</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PerformanceCards />
        
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevenueSummary />
          <UserMetrics />
        </div>
        
        <div className="mt-8">
          <TransactionTrends />
        </div>
        
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <OrderAnalytics />
          <YearlyComparison />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;