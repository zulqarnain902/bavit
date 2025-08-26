"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Edit, Trash2 } from "lucide-react";

export default function ViewUserCategory() {
  const [categories] = useState([
    { id: 1, role: "packer", description: "The packer is for packaging items.", status: "Active" },
    { id: 2, role: "assembly team", description: "Assembly Team Assembly Team Assembly Team", status: "Active" },
    { id: 3, role: "delivery", description: "Responsible for delivering items.", status: "Inactive" },
    { id: 4, role: "manager", description: "Supervises entire operations.", status: "Active" },
    { id: 5, role: "quality checker", description: "Ensures product quality.", status: "Active" },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ Replaced Old Sidebar with Your Provided Sidebar */}
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
              </Link>
              <li className="cursor-pointer hover:text-red-300">2.2 View Teams</li>
              <li className="cursor-pointer hover:text-red-300">2.3 View Users</li>
            </ul>
          </details>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">3. Suppliers</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">4. Inventory</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">5. Bundles</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">6. Shipping & Labels</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">7. Delivery</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">8. Replacements</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">9. Complaints</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">10. Ticketing</p>
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">11. Customer Tracking</p>
        </nav>
      </aside>

      {/* ✅ Main Content Adjusted with Margin */}
      <div className="flex-1 p-6 ml-64">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">View Users Category</h1>
          <div className="flex items-center space-x-3">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">SUPER ADMIN</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          View details of all the Users categories added in the system
        </p>

        {/* Search & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/2">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
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

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Role</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 capitalize">{cat.role}</td>
                  <td className="p-3">{cat.description}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        cat.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td className="p-3 flex space-x-3">
                    <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
                      <Edit size={18} className="text-blue-600" />
                    </button>
                    <button className="p-2 rounded-full bg-red-100 hover:bg-red-200">
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
