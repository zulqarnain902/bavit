import React from "react";
import Image from "next/image";

interface Seller {
  id: number;
  name: string;
  company: string;
  category: string;
  stock: number;
  revenue: string;
  growth: number;
}

const TopSellers: React.FC = () => {
  const sellers: Seller[] = [
    { id: 1, name: "Oliver Tyler", company: "iTest Factory", category: "Bags and Wallets", stock: 8547, revenue: "$541200", growth: 32 },
    { id: 2, name: "John Roberts", company: "Digitech Galaxy", category: "Watches", stock: 895, revenue: "$75030", growth: 79 },
    { id: 3, name: "Harley Fuller", company: "Nesta Technologies", category: "Bike Accessories", stock: 3470, revenue: "$45600", growth: 90 },
    { id: 4, name: "James Bowen", company: "Zoetic Fashion", category: "Clothes", stock: 5488, revenue: "$29456", growth: 40 },
    { id: 5, name: "Zoe Dennis", company: "Meta4Systems", category: "Furniture", stock: 4100, revenue: "$11260", growth: 57 },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Top Sellers</h2>
        <button className="text-gray-600 text-sm hover:underline">View Report</button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-3 text-gray-600 font-medium">Seller</th>
            <th className="py-2 px-3 text-gray-600 font-medium">Category</th>
            <th className="py-2 px-3 text-gray-600 font-medium">Stock</th>
            <th className="py-2 px-3 text-gray-600 font-medium">Revenue</th>
            <th className="py-2 px-3 text-gray-600 font-medium">Growth</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id} className="hover:bg-gray-50">
              <td className="py-2 px-3 flex items-center gap-3">
                <Image src="/user.png" alt={seller.name} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-semibold text-gray-700">{seller.company}</p>
                  <p className="text-xs text-gray-500">{seller.name}</p>
                </div>
              </td>
              <td className="py-2 px-3 text-gray-600 text-sm">{seller.category}</td>
              <td className="py-2 px-3 text-gray-600 text-sm">{seller.stock} Stock</td>
              <td className="py-2 px-3 text-gray-600 text-sm">{seller.revenue}</td>
              <td className="py-2 px-3 text-green-600 font-semibold text-sm">{seller.growth}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellers;
