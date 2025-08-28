"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export default function AddUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 mt-6">
      <h2 className="text-center text-xl font-semibold text-red-700 mb-6">
        Add User
      </h2>
      <Sidebar />
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          User Category <span className="text-red-500">*</span>
        </label>
        <select className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-red-300 outline-none">
          <option value="">Select user category</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <p className="text-red-500 text-sm mt-1">
          Please select a user category
        </p>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="px-3 py-2 border border-r-0 rounded-l-lg bg-gray-100 text-sm">
              +44
            </span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-r-lg px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full border rounded-lg px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="confirm password"
            className="w-full border rounded-lg px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Team Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Team Selection
        </label>
        <select className="w-full border rounded-lg px-3 py-2 bg-gray-100">
          <option value="">Select teams for this user...</option>
          <option value="team1">Team A (Sales)</option>
          <option value="team2">Team B (Support)</option>
        </select>
        <p className="text-gray-500 text-sm mt-1">
          You can assign teams from any category. Teams are shown with their
          category in parentheses.
        </p>
      </div>

      {/* Supervisor Checkbox */}
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md border mb-6">
        <input type="checkbox" id="supervisor" className="w-4 h-4" />
        <label htmlFor="supervisor" className="text-gray-700">
          Is this user a supervisor?{" "}
          <span className="text-gray-500 text-sm">
            (Check if this user will supervise teams)
          </span>
        </label>
      </div>

      {/* ---------------- ADDRESS DETAILS SECTION ---------------- */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Address Details
          <span className="text-red-600 ml-2">1. Current Address</span>
        </h3>

        {/* Country, City, County */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="United Kingdom"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="London"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              County <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Essex / Surrey"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Street + Apartment + Postal Code */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Street 36 A Downtown"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Apartment No
            </label>
            <input
              type="text"
              placeholder="21B"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E1 7LP"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* Map & Search */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Location Map (Click or drag marker to set location)
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for a location (e.g., London, Manchester, etc.)"
              className="flex-1 border rounded-l-lg px-3 py-2"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-r-lg">
              Search
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Start typing to see location suggestions, or use the search bar to
            navigate to an area.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-right">
        <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-lg">
          Save & Continue
        </button>
      </div>
    </div>
  );
}
