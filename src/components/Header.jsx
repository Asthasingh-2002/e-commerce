import { Search, Moon } from "lucide-react";
import {
  BellIcon,
  ClockIcon,
  SearchbarSideIcon,
  StarIcon,
  SunIcon,
  TabIcon,
} from "../assets/icon";

const Header = ({
  setSidebarCollapsed,
  sidebarCollapsed,
  activeSection,
  bgActive,
  setBgActive,
  setRightSidebarCollapsed,
}) => {
  return (
    <>
      <header
        className={`border-b ${
          bgActive ? "border-[#FFFFFF1A]" : "border-gray-200"
        } px-6 py-4`}
        style={{
          background: bgActive ? "#1C1C1C" : "#fff",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <TabIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
            </button>
            <div className="flex items-center space-x-4">
              <StarIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
              <span
                className={`text-sm ${
                  bgActive ? "text-[#FFFFFF99]" : "text-gray-500"
                }`}
              >
                Dashboards
              </span>
              {activeSection && (
                <span
                  className={`text-gray-500 ${
                    bgActive ? "text-[#FFFFFF99]" : ""
                  }`}
                >
                  /
                </span>
              )}
              <span
                className={`text-sm font-medium ${
                  bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                }`}
              >
                {activeSection}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: bgActive ? "#FFFFFF99" : "#1C1C1C33" }}
              />
              <input
                type="text"
                placeholder="Search"
                className={`pl-10 pr-4 py-2 border-0 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500
                  ${
                    bgActive
                      ? "bg-[#404040] text-[#FFFFFF33] placeholder:text-[#FFFFFF33]"
                      : "bg-gray-100 text-[#1C1C1C] placeholder:text-[#1C1C1C33]"
                  }`}
                style={{
                  backgroundColor: bgActive ? "#404040" : "#F3F4F6",
                  fontWeight: "400",
                }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                <SearchbarSideIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
              </span>
            </div>

            <button
              className={`p-1 rounded-lg ${
                bgActive ? "hover:bg-[#404040]" : "hover:bg-gray-100"
              }`}
              onClick={() => setBgActive((prev) => !prev)}
            >
              {bgActive ? (
                <SunIcon color="#FFFFFF" />
              ) : (
                <Moon color="#1C1C1C" size={16} />
              )}
            </button>
            <button
              className={`p-1 rounded-lg ${
                bgActive ? "hover:bg-[#404040]" : "hover:bg-gray-100"
              }`}
            >
              <ClockIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
            </button>
            <button
              className={`p-1 rounded-lg ${
                bgActive ? "hover:bg-[#404040]" : "hover:bg-gray-100"
              }`}
            >
              <BellIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
            </button>
            <button
              className={`p-1 rounded-lg ${
                bgActive ? "hover:bg-[#404040]" : "hover:bg-gray-100"
              }`}
              onClick={() => setRightSidebarCollapsed((prev) => !prev)} // Add this
            >
              <TabIcon color={bgActive ? "#FFFFFF" : "#1C1C1C"} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
