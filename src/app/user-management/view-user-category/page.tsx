"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import UnifiedTable from "@/components/UnifiedTable";

export default function ViewUserCategory() {
  const [categories] = useState([
    {
      id: 1,
      role: "packer",
      description: "The packer is for packaging items.",
      status: "Active",
    },
    {
      id: 2,
      role: "assembly team",
      description: "Assembly Team Assembly Team Assembly Team",
      status: "Active",
    },
    {
      id: 3,
      role: "delivery",
      description: "Responsible for delivering items.",
      status: "Inactive",
    },
    {
      id: 4,
      role: "manager",
      description: "Supervises entire operations.",
      status: "Active",
    },
    {
      id: 5,
      role: "quality checker",
      description: "Ensures product quality.",
      status: "Active",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">View Users Category</h1>
          <div className="flex items-center space-x-3"></div>
        </div>

        <p className="text-gray-600 mb-4">
          View details of all the Users categories added in the system
        </p>

        {/* Search & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/2">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search categories..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <Link
            href="/user-management/add-user-category"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
          >
            + Add User Category
          </Link>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-green-600 font-medium">10 records</div>
          <button className="bg-gray-200 px-3 py-1 rounded-lg">Columns</button>
        </div>

        {/* Unified Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <UnifiedTable data={categories} />
        </div>
      </div>
    </div>
  );
}
