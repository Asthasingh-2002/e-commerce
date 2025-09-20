"use client";

import { useEffect, useState } from "react";
import { Search, Calendar, ListFilter, ArrowDownUp, Plus } from "lucide-react";

const ordersData = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
  },
  // Additional dummy data for pagination
  {
    id: "#CM9806",
    user: "Sarah Johnson",
    project: "E-commerce Site",
    address: "Main Street Dallas",
    date: "Feb 1, 2023",
    status: "Complete",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9807",
    user: "Mike Chen",
    project: "Mobile App",
    address: "Oak Avenue Seattle",
    date: "Jan 30, 2023",
    status: "In Progress",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "#CM9808",
    user: "Lisa Park",
    project: "Portfolio Website",
    address: "Pine Street Portland",
    date: "Jan 28, 2023",
    status: "Pending",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Complete":
      return " text-emerald-600 ";
    case "In Progress":
      return "text-blue-600 ";
    case "Pending":
      return "text-sky-600 ";
    case "Approved":
      return "text-amber-600";
    case "Rejected":
      return "text-gray-500 ";
    default:
      return "text-gray-500 ";
  }
};

export default function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedOrders, setCheckedOrders] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredOrders = ordersData.filter(
    (order) =>
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  // Handle individual checkbox
  const handleCheck = (orderId) => {
    setCheckedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  // Handle header checkbox
  const handleCheckAll = () => {
    if (allChecked) {
      setCheckedOrders([]);
      setAllChecked(false);
    } else {
      setCheckedOrders(currentOrders.map((order) => order.id));
      setAllChecked(true);
    }
  };

  // Sync header checkbox with row checkboxes
  useEffect(() => {
    setAllChecked(
      currentOrders.length > 0 &&
        currentOrders.every((order) => checkedOrders.includes(order.id))
    );
  }, [checkedOrders, currentOrders]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div className="flex items-center  gap-4">
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Plus className=" text-[#1C1C1C] h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <ListFilter className=" text-[#1C1C1C] h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <ArrowDownUp className=" text-[#1C1C1C] h-4 w-4" />
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-1.5 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleCheckAll}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-200 rounded focus:ring-blue-500 focus:ring-2"
                />
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                Order ID
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                User
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                Project
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                Address
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                Date
              </th>
              <th className="text-left p-4 font-medium text-gray-500 text-sm">
                Status
              </th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className="border-b border-gray-50 hover:bg-gray-50/50"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={checkedOrders.includes(order.id)}
                    onChange={() => handleCheck(order.id)}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </td>
                <td className="p-4 font-medium text-[#1C1C1C] text-sm">
                  {order.id}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={order.avatar || "/placeholder.svg"}
                      alt={order.user}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-[#1C1C1C] text-sm font-medium">
                      {order.user}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-gray-700 text-sm">{order.project}</td>
                <td className="p-4 text-gray-700 text-sm">{order.address}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {order.date}
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded mr-1.5 ${
                        order.status === "Complete"
                          ? "bg-emerald-500"
                          : order.status === "In Progress"
                          ? "bg-blue-500"
                          : order.status === "Pending"
                          ? "bg-sky-500"
                          : order.status === "Approved"
                          ? "bg-amber-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-2 hover:bg-gray-50 rounded-lg disabled:opacity-50"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded-lg text-sm font-medium ${
                page === currentPage
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-gray-50 rounded-lg disabled:opacity-50"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
