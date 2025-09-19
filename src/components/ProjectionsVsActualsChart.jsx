"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    projections: 17,
    actuals: 3,
  },
  {
    month: "Feb",
    projections: 20,
    actuals: 5,
  },
  {
    month: "Mar",
    projections: 18,
    actuals: 4,
  },
  {
    month: "Apr",
    projections: 22,
    actuals: 5,
  },
  {
    month: "May",
    projections: 15,
    actuals: 3,
  },
  {
    month: "Jun",
    projections: 21,
    actuals: 4,
  },
];

export function ProjectionsVsActualsChart() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Projections vs Actuals
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 14 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 14 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="#93c5fd"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="#bfdbfe"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
