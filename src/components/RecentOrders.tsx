"use client";
import React from "react";
import Image from "next/image";

const orders = [
	{
		id: "#VZ2112",
		customer: "Alex Smith",
		product: "Clothes",
		amount: "$109.00",
		vendor: "Zoetic Fashion",
		status: "Paid",
		rating: "5 (61 votes)",
		image: "/user1.png",
	},
	{
		id: "#VZ2111",
		customer: "Jansh Brown",
		product: "Kitchen Storage",
		amount: "$149.00",
		vendor: "Micro Design",
		status: "Pending",
		rating: "4.5 (61 votes)",
		image: "/user2.png",
	},
	{
		id: "#VZ2109",
		customer: "Ayaaan Bowen",
		product: "Bike Accessories",
		amount: "$215.00",
		vendor: "Nesta Technologies",
		status: "Paid",
		rating: "4.9 (89 votes)",
		image: "/user3.png",
	},
	{
		id: "#VZ2108",
		customer: "Prezy Mark",
		product: "Furniture",
		amount: "$199.00",
		vendor: "Syntyce Solutions",
		status: "Unpaid",
		rating: "4.3 (47 votes)",
		image: "/user4.png",
	},
	{
		id: "#VZ2107",
		customer: "Vihan Hudda",
		product: "Bags and Wallets",
		amount: "$330.00",
		vendor: "iTest Factory",
		status: "Paid",
		rating: "4.7 (161 votes)",
		image: "/user5.png",
	},
];

const RecentOrders: React.FC = () => {
	return (
		<div className="bg-white shadow-md rounded-xl p-4 w-full max-w-screen-2xl h-auto max-h-96 overflow-y-auto">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-md font-medium text-gray-600">Recent Orders</h2>
				<button className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-lg hover:bg-blue-200">
					Generate Report
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full border-collapse text-sm">
					<thead>
						<tr className="bg-gray-100 text-gray-700 text-sm">
							<th className="p-3 text-left">Order ID</th>
							<th className="p-3 text-left">Customer</th>
							<th className="p-3 text-left">Product</th>
							<th className="p-3 text-left">Amount</th>
							<th className="p-3 text-left">Vendor</th>
							<th className="p-3 text-left">Status</th>
							<th className="p-3 text-left">Rating</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr key={index} className="border-b hover:bg-gray-50">
								<td className="p-3 text-red-500 font-semibold">{order.id}</td>
								<td className="p-3 flex items-center gap-2">
									<Image
										src={order.image}
										alt={order.customer}
										width={30}
										height={30}
										className="rounded-full"
									/>
									{order.customer}
								</td>
								<td className="p-3">{order.product}</td>
								<td className="p-3 text-green-600">{order.amount}</td>
								<td className="p-3">{order.vendor}</td>
								<td className="p-3">
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											order.status === "Paid"
												? "bg-green-100 text-green-700"
												: order.status === "Pending"
												? "bg-yellow-100 text-yellow-700"
												: "bg-red-100 text-red-700"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className="p-3">{order.rating}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentOrders;
