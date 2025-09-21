import { Search } from "lucide-react";
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
  setBgActive, // Receive setter
}) => {
  return (
    <>
      <header
        className="border-b border-gray-200 px-6 py-4"
        style={{
          background: bgActive ? "#1C1C1C" : "#fff",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <TabIcon />
            </button>
            <div className="flex items-center space-x-4">
              <StarIcon />
              <span className="text-sm text-gray-500">Dashboards</span>
              {activeSection && <span className=" text-gray-500">/</span>}
              <span className="text-sm text-[#1C1C1C] font-medium">
                {activeSection}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: "#1C1C1C33" }}
              />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#1C1C1C33]"
                style={{
                  color: "#1C1C1C",
                  backgroundColor: "#F3F4F6",
                  fontWeight: "400",
                }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                <SearchbarSideIcon />
              </span>
            </div>

            <button
              className="p-1 hover:bg-gray-100 rounded-lg"
              onClick={() => setBgActive((prev) => !prev)} // Toggle theme
            >
              <SunIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <ClockIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <BellIcon />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-lg">
              <TabIcon />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
