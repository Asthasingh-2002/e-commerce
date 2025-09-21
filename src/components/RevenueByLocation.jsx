"use client";

import MapImage from "../assets/Map.png"; // Adjust the path as needed

const revenueByLocation = [
  { city: "New York", value: "72K", position: { x: 25, y: 35 } },
  { city: "San Francisco", value: "39K", position: { x: 15, y: 40 } },
  { city: "Sydney", value: "25K", position: { x: 85, y: 75 } },
  { city: "Singapore", value: "61K", position: { x: 75, y: 55 } },
];

export function RevenueByLocation({ bgActive }) {
  return (
    <div className="space-y-6">
      <h3
        className={`text-md font-semibold ${
          bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
        }`}
      >
        Revenue by Location
      </h3>

      {/* World Map Image */}
      <div
        className={`relative h-40 rounded-lg overflow-hidden ${
          bgActive ? "bg-[#404040]" : "bg-gray-50"
        }`}
      >
        <img
          src={MapImage}
          alt="World Map"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Overlay revenue markers */}
        {revenueByLocation.map((loc, idx) => (
          <div
            key={idx}
            className="absolute flex flex-col items-center"
            style={{
              left: `${loc.position.x}%`,
              top: `${loc.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded shadow"
              style={{ whiteSpace: "nowrap" }}
            >
              {loc.value}
            </div>
            <div
              className="w-2 h-2 rounded-full bg-blue-500 border border-white mt-1"
              title={loc.city}
            />
          </div>
        ))}
      </div>

      {/* Location List */}
      <div className="space-y-4">
        {revenueByLocation.map((location, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex-1">
              <div
                className={`text-sm font-medium mb-1 ${
                  bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                }`}
              >
                {location.city}
              </div>
              <div
                className={`w-full rounded-full h-1 ${
                  bgActive ? "bg-[#404040]" : "bg-gray-200"
                }`}
              >
                <div
                  className="bg-blue-300 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(
                      (Number.parseInt(location.value) / 72) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
            <div
              className={`ml-4 text-sm font-semibold ${
                bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {location.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
