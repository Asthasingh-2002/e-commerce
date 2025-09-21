import { TrendingUp, TrendingDown, MapPin } from "lucide-react";
import Header from "./Header";
import { ProjectionsVsActualsChart } from "./ProjectionsVsActualsChart";
import { RevenueByLocation } from "./RevenueByLocation";
import RevenueChart from "./RevenueChart";
import { TotalSalesChart } from "./TotalSalesChart";
import OrdersTable from "./OrdersTable";
import { DownIcon, UpIcon } from "../assets/icon";

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

const MainContent = ({
  setSidebarCollapsed,
  sidebarCollapsed,
  activeSection,
  bgActive,
  setBgActive,
  rightSidebarCollapsed,
  setRightSidebarCollapsed,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col overflow-hidden ${
        bgActive ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      {/* Header */}
      <Header
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarCollapsed={sidebarCollapsed}
        activeSection={activeSection}
        bgActive={bgActive}
        setBgActive={setBgActive}
        rightSidebarCollapsed={rightSidebarCollapsed}
        setRightSidebarCollapsed={setRightSidebarCollapsed}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 sidebar-scroll ">
          <h1
            className={`text-lg font-semibold mb-6 ${
              bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
            }`}
          >
            {activeSection === "Orders" ? "Order List" : "eCommerce"}
          </h1>
          {activeSection === "Orders" ? (
            <div>
              <OrdersTable bgActive={bgActive} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Top Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-stretch">
                  <div className="bg-[#E3F5FF] rounded-2xl p-8 h-full flex flex-col justify-between">
                    <h3 className="text-sm font-medium text-[#1C1C1C] mb-2">
                      Customers
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#1C1C1C]">
                        3,781
                      </span>
                      <span className="text-sm text-[#1C1C1C] flex items-center gap-1.5">
                        +11.01%
                        <UpIcon />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between ${
                      bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                    }`}
                  >
                    <h3
                      className={`text-sm font-medium mb-2 ${
                        bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                      }`}
                    >
                      Orders
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-2xl font-bold ${
                          bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                        }`}
                      >
                        1,219
                      </span>
                      <span
                        className={`text-sm flex items-center gap-1.5 ${
                          bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                        }`}
                      >
                        -0.03%
                        <DownIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between ${
                      bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                    }`}
                  >
                    <h3
                      className={`text-sm font-medium mb-2 ${
                        bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                      }`}
                    >
                      Revenue
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-2xl font-bold ${
                          bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                        }`}
                      >
                        $695
                      </span>
                      <span
                        className={`text-sm flex items-center gap-1.5 ${
                          bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                        }`}
                      >
                        +15.03%
                        <UpIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`bg-[#E5ECF6] rounded-2xl p-8 h-full flex flex-col justify-between ${
                      bgActive
                        ? "text-[#FFFFFF99] border-[#FFFFFF33]"
                        : "text-[#1C1C1C66] border-[#1C1C1C33]"
                    }`}
                  >
                    <h3 className="text-sm font-medium text-[#1C1C1C] mb-2">
                      Growth
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#1C1C1C]">
                        30.1%
                      </span>
                      <span className="text-sm text-[#1C1C1C] flex items-center gap-1.5">
                        +6.08%
                        <UpIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projections vs Actuals */}
                <div
                  className={`${
                    bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                  } rounded-xl p-6 `}
                >
                  <ProjectionsVsActualsChart bgActive={bgActive} />
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Revenue Chart */}
                <div
                  className={`${
                    bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                  } lg:col-span-2 rounded-xl p-6 `}
                >
                  <RevenueChart bgActive={bgActive} />
                </div>

                {/* Revenue by Location */}
                <div
                  className={`${
                    bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                  } rounded-xl p-6 `}
                >
                  <RevenueByLocation bgActive={bgActive} />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Selling Products */}
                <div
                  className={`${
                    bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                  } lg:col-span-2 rounded-xl p-6 `}
                >
                  <h3
                    className={`text-md font-semibold mb-4 ${
                      bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    }`}
                  >
                    Top Selling Products
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr
                          className={`text-left text-sm border-b ${
                            bgActive
                              ? "text-[#FFFFFF99] border-[#FFFFFF33]"
                              : "text-[#1C1C1C66] border-[#1C1C1C33]"
                          }`}
                        >
                          <th className="pb-3 font-medium">Name</th>
                          <th className="pb-3 font-medium">Price</th>
                          <th className="pb-3 font-medium">Quantity</th>
                          <th className="pb-3 font-medium">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {topProducts.map((product, idx) => (
                          <tr key={idx}>
                            <td
                              className={`py-3 ${
                                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                              }`}
                            >
                              {product.name}
                            </td>
                            <td
                              className={`py-3 ${
                                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                              }`}
                            >
                              {product.price}
                            </td>
                            <td
                              className={`py-3 ${
                                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                              }`}
                            >
                              {product.quantity}
                            </td>
                            <td
                              className={`py-3 ${
                                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                              }`}
                            >
                              {product.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Total Sales */}
                <div
                  className={`${
                    bgActive ? "bg-[#404040]" : "bg-[#F7F9FB]"
                  } rounded-xl p-6 `}
                >
                  <TotalSalesChart bgActive={bgActive} />
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
