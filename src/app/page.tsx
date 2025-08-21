"use client";
import { useState } from "react";
import { Search, Edit, Trash2, Plus } from "lucide-react";

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
      {/* Sidebar */}
      <aside className="w-20 bg-red-700 flex flex-col items-center py-5 space-y-6 shadow-lg">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded" />
        <div className="flex flex-col space-y-6 text-white text-xl">
          <span>🏠</span>
          <span>👥</span>
          <span>📦</span>
          <span>⚙️</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
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
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            <Plus size={18} className="mr-2" /> Add User Category
          </button>
        </div>

        {/* Filters / Config */}
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
