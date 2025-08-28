"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import UnifiedTable from "@/components/UnifiedTable";

const teams = [
	{
		id: 1,
		role: "packer",
		description: "The packer is for packaging items.",
		status: "Blocked",
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
		status: "Active",
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
];

export default function ViewUserCategory() {
	const [categories] = useState(teams);

	return (
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 p-6 ml-64">
				{/* Page Title */}
				<h1 className="text-3xl font-bold text-center mb-1">View Teams</h1>
				<p className="text-gray-600 text-center mb-6">
					View Details of all the Teams
				</p>

				{/* Search & Add Button */}
				<div className="flex justify-between items-center mb-4">
					<div className="relative w-1/3">
						<Search
							className="absolute left-3 top-2.5 text-gray-400"
							size={20}
						/>
						<input
							type="text"
							placeholder="Search..."
							className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:ring-green-300"
						/>
					</div>
					<Link
						href="/user-management/add-user-category"
						className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
					>
						+ Add Teams
					</Link>
				</div>

				{/* Filters Section */}
				<div className="bg-white shadow rounded-lg border mb-4">
					<button className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium">
						Filters
						<span className="text-gray-400">▼</span>
					</button>
				</div>

				{/* Records & Columns */}
				<div className="flex justify-between items-center mb-4">
					<span className="text-green-600 font-medium">
						{categories.length} records
					</span>
					<button className="bg-gray-200 px-3 py-1 rounded-lg shadow">
						Columns
					</button>
				</div>

				{/* Table */}
				<div className="bg-white shadow rounded-lg overflow-hidden">
					<UnifiedTable data={categories} />
				</div>
			</div>
		</div>
	);
}
