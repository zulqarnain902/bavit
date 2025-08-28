import React from "react";
import { Edit, Trash2 } from "lucide-react";

interface TableProps {
  data: Array<{ id: number; role: string; description: string; status: string }>;

}

const UnifiedTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
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
          {data.map((cat, index) => (
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
  );
};

export default UnifiedTable;
