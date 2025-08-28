"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function AddTeam() {
  const [formData, setFormData] = useState({
    userCategory: "",
    teamName: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Team added successfully!");
    setFormData({
      userCategory: "",
      teamName: "",
      description: "",
    });
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-3xl p-6">
          {/* Title */}
          <h2 className="text-center text-2xl font-semibold text-[#C4310C] mb-6">
            Add Team
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Category */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                User Category <span className="text-red-500">*</span>
              </label>
              <select
                name="userCategory"
                value={formData.userCategory}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C4310C] focus:border-[#C4310C]"
              >
                <option value="">Select user category</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            {/* Team Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Team Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                placeholder="Enter team name"
                value={formData.teamName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C4310C] focus:border-[#C4310C]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter team description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C4310C] focus:border-[#C4310C]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#C4310C] text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700 transition"
              >
                Add Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
