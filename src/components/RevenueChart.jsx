"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample data matching the chart pattern from the image
const revenueData = [
  { month: "Jan", currentWeek: 13000000, previousWeek: 8000000 },
  { month: "Feb", currentWeek: 9000000, previousWeek: 17000000 },
  { month: "Mar", currentWeek: 7000000, previousWeek: 15000000 },
  { month: "Apr", currentWeek: 14000000, previousWeek: 10000000 },
  { month: "May", currentWeek: 17000000, previousWeek: 12000000 },
  { month: "Jun", currentWeek: 19000000, previousWeek: 23000000 },
];

export default function RevenueChart({ bgActive }) {
  return (
    <div className="w-full">
      {/* Header with title and legend */}
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-md font-medium ${
            bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          }`}
        >
          Revenue
        </h3>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                bgActive ? "bg-white" : "bg-black"
              }`}
            ></div>
            <span
              className={`${bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"}`}
            >
              Current Week
            </span>
            <span
              className={`font-medium ${
                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              $58,211
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <span
              className={`${bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"}`}
            >
              Previous Week
            </span>
            <span
              className={`font-medium ${
                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              $68,768
            </span>
          </div>
        </div>
      </div>

      {/* Chart container */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={bgActive ? "#FFFFFF33" : "#f0f0f0"}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: bgActive ? "#FFFFFF99" : "#9ca3af",
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: bgActive ? "#FFFFFF99" : "#9ca3af",
              }}
              tickFormatter={(value) => `${value / 1000000}M`}
              domain={[0, 30000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
            />

            {/* Current Week Line (Black/White) */}
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke={bgActive ? "#FFFFFF" : "#000000"}
              strokeWidth={2.5}
              dot={false}
              strokeDasharray="0 0"
            />

            {/* Previous Week Line (Light Blue) */}
            <Line
              type="monotone"
              dataKey="previousWeek"
              stroke="#93c5fd"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
