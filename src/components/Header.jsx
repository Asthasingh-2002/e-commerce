import {
  Bell,
  Menu,
  Moon,
  RotateCcw,
  Search,
  Settings,
  Star,
} from "lucide-react";
import React from "react";

const Header = ({ setSidebarCollapsed, sidebarCollapsed, activeSection }) => {
  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <Menu className="w-5 h-5 text-gray-500" />
            </button>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Dashboards</span>
              {activeSection && <span className=" text-gray-500">/</span>}
              <span className="text-sm text-gray-900 font-medium">
                {activeSection}
              </span>{" "}
              {/* Updated */}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                ⌘/
              </span>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Moon className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <RotateCcw className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
