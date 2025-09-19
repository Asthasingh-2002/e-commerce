"use client";

const revenueByLocation = [
  { city: "New York", value: "72K", position: { x: 25, y: 35 } },
  { city: "San Francisco", value: "39K", position: { x: 15, y: 40 } },
  { city: "Sydney", value: "25K", position: { x: 85, y: 75 } },
  { city: "Singapore", value: "61K", position: { x: 75, y: 55 } },
];

export function RevenueByLocation() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Revenue by Location
      </h3>

      {/* World Map */}
      <div className="relative h-40 bg-gray-50 rounded-lg overflow-hidden">
        <svg
          viewBox="0 0 100 60"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simplified world map paths */}
          <g fill="#cbd5e1" stroke="none">
            {/* North America */}
            <path d="M5,20 L25,15 L30,25 L25,35 L15,40 L5,35 Z" />
            {/* South America */}
            <path d="M20,40 L25,35 L30,45 L25,55 L20,50 Z" />
            {/* Europe */}
            <path d="M45,15 L55,12 L60,20 L55,25 L45,22 Z" />
            {/* Africa */}
            <path d="M45,25 L55,22 L60,35 L55,45 L45,40 Z" />
            {/* Asia */}
            <path d="M60,10 L85,8 L90,25 L85,35 L60,30 Z" />
            {/* Australia */}
            <path d="M75,45 L85,43 L90,50 L85,55 L75,52 Z" />
          </g>

          {/* Location dots */}
          {revenueByLocation.map((location, idx) => (
            <circle
              key={idx}
              cx={location.position.x}
              cy={location.position.y}
              r="1.5"
              fill="#1f2937"
            />
          ))}
        </svg>
      </div>

      {/* Location List */}
      <div className="space-y-4">
        {revenueByLocation.map((location, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">
                {location.city}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
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
            <div className="ml-4 text-sm font-semibold text-gray-900">
              {location.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
