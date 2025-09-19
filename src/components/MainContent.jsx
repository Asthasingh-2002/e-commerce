import {
  Bell,
  Search,
  Settings,
  Moon,
  RotateCcw,
  Menu,
  Star,
  TrendingUp,
  TrendingDown,
  MapPin,
} from "lucide-react";
import React from "react";
import Header from "./Header";

const topProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const revenueByLocation = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
];

const MainContent = ({ setSidebarCollapsed, sidebarCollapsed }) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <Header
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            eCommerce
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#E3F5FF] rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Customers
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    3,781
                  </span>
                  <span className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +11.01%
                  </span>
                </div>
              </div>

              <div className="bg-[#F7F9FB] rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Orders
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    1,219
                  </span>
                  <span className="text-sm text-red-600 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -0.03%
                  </span>
                </div>
              </div>

              <div className="bg-[#F7F9FB] rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Revenue
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">$695</span>
                  <span className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +15.03%
                  </span>
                </div>
              </div>

              <div className="bg-[#E5ECF6] rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Growth
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    30.1%
                  </span>
                  <span className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +6.08%
                  </span>
                </div>
              </div>
            </div>

            {/* Projections vs Actuals */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Projections vs Actuals
              </h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                  <div
                    key={month}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="flex space-x-1">
                      <div
                        className="w-8 bg-blue-200 rounded-t"
                        style={{ height: `${Math.random() * 120 + 40}px` }}
                      ></div>
                      <div
                        className="w-8 bg-blue-400 rounded-t"
                        style={{ height: `${Math.random() * 140 + 60}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>Current Week</span>
                    <span className="font-medium">$58,211</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <span>Previous Week</span>
                    <span className="font-medium">$68,768</span>
                  </div>
                </div>
              </div>
              <div className="h-48 flex items-center justify-center">
                <span className="text-gray-500">Revenue Chart</span>
              </div>
            </div>

            {/* Revenue by Location */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Revenue by Location
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="relative w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">World Map</span>
                  <div className="absolute top-4 right-4 space-y-2">
                    {revenueByLocation.map((location, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <MapPin className="w-3 h-3 text-blue-500" />
                        <span className="text-gray-600">{location.city}</span>
                        <span className="font-medium">{location.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Selling Products */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Top Selling Products
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                      <th className="pb-3 font-medium">Name</th>
                      <th className="pb-3 font-medium">Price</th>
                      <th className="pb-3 font-medium">Quantity</th>
                      <th className="pb-3 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {topProducts.map((product, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 text-gray-900">{product.name}</td>
                        <td className="py-3 text-gray-600">{product.price}</td>
                        <td className="py-3 text-gray-600">
                          {product.quantity}
                        </td>
                        <td className="py-3 text-gray-900 font-medium">
                          {product.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Total Sales */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Sales
              </h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="w-full h-full bg-gray-200 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">38.6%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <span>Direct</span>
                  </span>
                  <span className="font-medium">$300.56</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Affiliate</span>
                  </span>
                  <span className="font-medium">$135.18</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Sponsored</span>
                  </span>
                  <span className="font-medium">$154.02</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>E-mail</span>
                  </span>
                  <span className="font-medium">$48.96</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainContent;
