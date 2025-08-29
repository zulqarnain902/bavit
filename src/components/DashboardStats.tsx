import React from "react";
import { ComposedChart } from "recharts";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy Data
const data = [
  { name: "Jan", orders: 38, earnings: 88, refunds: 8 },
  { name: "Feb", orders: 62, earnings: 98, refunds: 12 },
  { name: "Mar", orders: 48, earnings: 70, refunds: 7 },
  { name: "Apr", orders: 65, earnings: 110, refunds: 18 },
  { name: "May", orders: 52, earnings: 78, refunds: 20 },
  { name: "Jun", orders: 60, earnings: 85, refunds: 10 },
  { name: "Jul", orders: 44, earnings: 52, refunds: 5 },
  { name: "Aug", orders: 40, earnings: 25, refunds: 8 },
  { name: "Sep", orders: 72, earnings: 92, refunds: 9 },
  { name: "Oct", orders: 55, earnings: 42, refunds: 18 },
  { name: "Nov", orders: 61, earnings: 88, refunds: 14 },
  { name: "Dec", orders: 48, earnings: 37, refunds: 22 },
];

const DashboardStats = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
        <div className="flex gap-2">
          <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">
            ALL
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded-md">1M</button>
          <button className="bg-gray-100 px-3 py-1 rounded-md">6M</button>
          <button className="bg-gray-100 px-3 py-1 rounded-md">1Y</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold">7,585</h3>
          <p className="text-gray-500">Orders</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">$22.89k</h3>
          <p className="text-gray-500">Earnings</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">367</h3>
          <p className="text-gray-500">Refunds</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-500">18.92%</h3>
          <p className="text-gray-500">Conversion Ratio</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#00b894" />
          <Line type="monotone" dataKey="orders" stroke="#d63031" />
          <Line
            type="monotone"
            dataKey="refunds"
            stroke="#ff7675"
            strokeDasharray="5 5"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardStats;
