import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  orders: number;
  stock: number;
  amount: string;
  date: string;
  outOfStock?: boolean;
}

const BestSellingProducts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const products: Product[] = [
    {
      id: 1,
      name: "Branded T-Shirts",
      image: "/products/tshirt.png",
      price: "$29.00",
      orders: 62,
      stock: 510,
      amount: "$1798",
      date: "24 Apr 2021",
    },
    {
      id: 2,
      name: "Bentwood Chair",
      image: "/products/chair.png",
      price: "$85.20",
      orders: 35,
      stock: 0,
      amount: "$2982",
      date: "19 Mar 2021",
      outOfStock: true,
    },
    {
      id: 3,
      name: "Borosil Paper Cup",
      image: "/products/cup.png",
      price: "$14.00",
      orders: 80,
      stock: 749,
      amount: "$1120",
      date: "01 Mar 2021",
    },
    {
      id: 4,
      name: "One Seater Sofa",
      image: "/products/sofa.png",
      price: "$127.50",
      orders: 56,
      stock: 0,
      amount: "$7140",
      date: "11 Feb 2021",
      outOfStock: true,
    },
    
  ];

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full h-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Best Selling Products</h2>
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {currentProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border-b last:border-none py-3"
        >
          <div className="flex items-center gap-3">
            <Image
              src={product.image}
              alt={product.name}
              width={45}
              height={45}
              className="rounded-lg"
            />
            <div>
              <p className="font-semibold text-gray-700">{product.name}</p>
              <p className="text-xs text-gray-500">{product.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-gray-600 text-sm">
            <span>{product.price}</span>
            <span>{product.orders} Orders</span>
            {product.outOfStock ? (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs">Out of stock</span>
            ) : (
              <span>{product.stock} Stock</span>
            )}
            <span className="font-semibold text-gray-800">{product.amount}</span>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === idx + 1
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
