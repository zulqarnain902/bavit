import React from "react";

const SalesByLocation = () => {
  const locations = [
    { name: "Canada", value: 75 },
    { name: "Greenland", value: 47 },
    { name: "Russia", value: 82 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-700">Sales by Locations</h2>
        <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md">
          Export Report
        </button>
      </div>
      <div>
        {locations.map((loc, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between">
              <span>{loc.name}</span>
              <span>{loc.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${loc.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesByLocation;
