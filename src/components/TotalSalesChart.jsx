"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#86efac" },
  { name: "Sponsored", value: 154.02, color: "#a78bfa" },
  { name: "E-mail", value: 48.96, color: "#7dd3fc" },
];

const totalSales = salesData.reduce((sum, item) => sum + item.value, 0);
const directPercentage = ((salesData[0].value / totalSales) * 100).toFixed(1);

export function TotalSalesChart() {
  return (
    <div>
      <h3 className="text-md font-semibold text-[#1C1C1C] mb-4">Total Sales</h3>

      {/* Donut Chart */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg">
              <span className="text-sm font-semibold">{directPercentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 text-sm">
        {salesData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-700">{item.name}</span>
            </span>
            <span className="font-medium text-[#1C1C1C]">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
