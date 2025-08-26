"use client";
import { useState } from "react";
import Link from "next/link";

export default function AddUserCategory() {
  const [permissions, setPermissions] = useState<string[]>([]);
  const allPermissions = [
    "DASHBOARD",
    "ADD USERS CATEGORY",
    "VIEW USERS CATEGORY",
    "ADD TEAMS",
    "VIEW TEAMS",
    "ADD USERS",
    "VIEW USERS",
    "MANAGE SUPPLIERS",
  ];

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPermissions(e.target.checked ? allPermissions : []);
  };

  const handlePermissionChange = (perm: string) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("User category added successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#731717] text-white flex flex-col p-4 fixed h-screen shadow-lg">
        <h1 className="text-2xl font-bold mb-6">BUILD MY RIG</h1>
        <nav className="space-y-3">
          <Link href="/dashboard">
            <p className="cursor-pointer hover:bg-red-700 p-2 rounded">1. Dashboard</p>
          </Link>

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

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Add User Category</h1>
          <Link
            href="/"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </Link>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg space-y-5"
        >
          {/* Role */}
          <div>
            <label className="block font-medium mb-1">Role *</label>
            <input
              type="text"
              placeholder="Enter category role"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              required
            />
          </div>

          {/* Category Type */}
          <div>
            <label className="block font-medium mb-1">Category Type *</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              required
            >
              <option value="">Select category type</option>
              <option value="team">Team</option>
              <option value="individual">Individual</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description *</label>
            <textarea
              placeholder="Enter category description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              required
            ></textarea>
          </div>

          {/* Permissions */}
          <div>
            <label className="block font-medium mb-2">Permissions *</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={permissions.length === allPermissions.length}
                  onChange={handleSelectAll}
                />
                <span className="font-semibold">Select All</span>
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {allPermissions.map((perm, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={permissions.includes(perm)}
                      onChange={() => handlePermissionChange(perm)}
                    />
                    <span>{perm}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <Link
              href="/user-management/view-user-category"
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
