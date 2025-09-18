"use client";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Edit, Trash2 } from "lucide-react";

interface TableProps {
  data: Array<{
    id: number;
    role: string;
    description: string;
    status: string;
  }>;
}
const UnifiedTable: React.FC<TableProps> = ({ data }) => {
  const [records, setRecords] = useState(data);
  const [filterText, setFilterText] = useState("");

  const handleDelete = (id: number) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const columns: TableColumn<{
    id: number;
    role: string;
    description: string;
    status: string;
  }>[] = [
    {
      name: "#",
      selector: (_row, index = 0) => index + 1,
      width: "60px",
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
      cell: (row) => <span className="capitalize">{row.role}</span>,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            row.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200">
            <Edit size={16} className="text-blue-600" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200"
          >
            <Trash2 size={16} className="text-red-600" />
          </button>
        </div>
      ),
    },
  ];

  const filteredRecords = records.filter(
    (item) =>
      item.role.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4f6",
        fontWeight: "600",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">User Categories</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredRecords}
        customStyles={customStyles}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default UnifiedTable;
