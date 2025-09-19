import { TrendingUp, TrendingDown, MapPin } from "lucide-react";
import Header from "./Header";
import { ProjectionsVsActualsChart } from "./ProjectionsVsActualsChart";
import { RevenueByLocation } from "./RevenueByLocation";
import RevenueChart from "./RevenueChart";
import { TotalSalesChart } from "./TotalSalesChart";
import OrdersTable from "./OrdersTable";

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

// const revenueByLocation = [
//   { city: "New York", value: "72K" },
//   { city: "San Francisco", value: "39K" },
//   { city: "Sydney", value: "25K" },
//   { city: "Singapore", value: "61K" },
// ];

const MainContent = ({
  setSidebarCollapsed,
  sidebarCollapsed,
  activeSection,
}) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <Header
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarCollapsed={sidebarCollapsed}
        activeSection={activeSection} 
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            {activeSection}
          </h1>
          {activeSection === "Orders" ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">Order List</h2>
              <OrdersTable />
            </div>
          ) : (
            <>
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
                      <span className="text-2xl font-bold text-gray-900">
                        $695
                      </span>
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
                  <ProjectionsVsActualsChart />
                </div>
              </div>

              {/* Charts Row */}
              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
                  <RevenueChart />
                </div>

                {/* Revenue by Location */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <RevenueByLocation />
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
                            <td className="py-3 text-gray-900">
                              {product.name}
                            </td>
                            <td className="py-3 text-gray-600">
                              {product.price}
                            </td>
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
                  <TotalSalesChart />
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainContent;
