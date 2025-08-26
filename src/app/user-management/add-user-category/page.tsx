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
    if (e.target.checked) {
      setPermissions(allPermissions);
    } else {
      setPermissions([]);
    }
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
      <aside className="w-60 bg-red-900 flex flex-col py-5 text-white shadow-lg">
        <div className="px-5 text-xl font-bold">BuildMyRig</div>
        <ul className="mt-6 space-y-3 px-5 text-gray-200">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Users</li>
          <li className="hover:text-white cursor-pointer">Suppliers</li>
          <li className="hover:text-white cursor-pointer">Inventory</li>
        </ul>
      </aside>

      {/* Main Form */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Add User Category</h1>
          <Link
            href="/"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </Link>
        </div>

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
