"use client";
import { Bell, Search, User, ChevronDown, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";
import DashboardStats from "../components/DashboardStats";
import SalesByLocation from "../components/SalesByLocation";


const data = [
  { name: "Canada", value: 75 },
  { name: "USA", value: 15 },
  { name: "UK", value: 10 },
];

const COLORS = ["#E74C3C", "#3498DB", "#2ECC71"];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#731717] text-white flex flex-col p-4 fixed h-screen">
        <h1 className="text-2xl font-bold mb-6">BUILD MY RIG</h1>
        <nav className="space-y-3">
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            1. Dashboard
          </p>
          <details className="group">
            <summary className="cursor-pointer hover:bg-red-700 p-2 rounded">
              2. Users
            </summary>
            <ul className="ml-4 space-y-1 mt-1">
              <Link href="/user-management/view-user-category">
                <li className="cursor-pointer hover:text-red-300">
                  2.1 View User Category
                </li>
              </Link>{" "}
              <li className="cursor-pointer hover:text-red-300">
                2.2 View Teams
              </li>
              <li className="cursor-pointer hover:text-red-300">
                2.3 View Users
              </li>
            </ul>
          </details>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            3. Suppliers
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            4. Inventory
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            5. Bundles
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            6. Shipping & Labels
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            7. Delivery
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            8. Replacements
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            9. Complaints
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            10. Ticketing
          </p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            11. Customer Tracking
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6  ">
          <h2 className="text-lg font-semibold">Good Morning, Build My Rig!</h2>
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 cursor-pointer text-gray-600" />
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Add Product</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
                          <User className="w-6 h-6 text-gray-600" />

          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Earnings", value: "$560.0k", change: "+16.24%" },
            { title: "Orders", value: "36,894", change: "-3.57%" },
            { title: "Customers", value: "183.35M", change: "+29.08%" },
            { title: "My Balance", value: "$166.00k", change: "+0.00%" },
          ].map((stat, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-gray-600">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-green-600">{stat.change}</span>
              </CardContent>
            </Card>
          ))}
        </div>

          <div className="p-6 bg-gray-50 min-h-screen grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <DashboardStats />
      </div>
      <div>
        <SalesByLocation />
      </div>
    </div>
      </div>
    </div>
  );
}
