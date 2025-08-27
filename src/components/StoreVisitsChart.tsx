"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 25.6 },
  { name: "Social", value: 32.0 },
  { name: "Email", value: 23.8 },
  { name: "Other", value: 9.9 },
  { name: "Referrals", value: 8.7 },
];

const COLORS = ["#D9534F", "#28A745", "#FFC107", "#FF6F61", "#17A2B8"];

const StoreVisitsChart: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-700">Store Visits by Source</h2>
        <button className="text-blue-500 text-sm">Report ▾</button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={60}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreVisitsChart;
