"use client";

import {
  BarChart3,
  FileText,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Users,
  Target,
  Eye,
} from "lucide-react";
import { useState } from "react";
import {
  AccountIcon,
  BlogIcon,
  CorporateIcon,
  DefaultIcon,
  EComIcon,
  OCourseIcon,
  ProjectIcon,
  SocialMediaIcon,
  UserProfileIcon,
} from "../assets/icon";

const sidebarItems = [
  {
    category: "Favorites/Recently",
    items: [
      { name: "Overview", icon: BarChart3, active: false },
      { name: "Projects", icon: FolderOpen, active: false },
    ],
  },
  {
    category: "Dashboards",
    items: [
      { name: "Default", icon: DefaultIcon, active: false },
      { name: "eCommerce", icon: EComIcon, active: true },
      { name: "Projects", icon: ProjectIcon, active: false },
      { name: "Online Courses", icon: OCourseIcon, active: false },
      { name: "Orders", icon: FileText, active: false },
    ],
  },
  {
    category: "Pages",
    items: [
      {
        name: "User Profile",
        icon: UserProfileIcon,
        active: false,
        hasSubItems: true,
        subItems: [
          { name: "Overview", icon: Eye },
          { name: "Projects", icon: FolderOpen },
          { name: "Campaigns", icon: Target },
          { name: "Documents", icon: FileText },
          { name: "Followers", icon: Users },
        ],
      },
      { name: "Account", icon: AccountIcon, active: false, hasSubItems: true },
      {
        name: "Corporate",
        icon: CorporateIcon,
        active: false,
        hasSubItems: true,
      },
      { name: "Blog", icon: BlogIcon, active: false, hasSubItems: true },
      {
        name: "Social",
        icon: SocialMediaIcon,
        active: false,
        hasSubItems: true,
      },
    ],
  },
];

const Sidebar = ({
  sidebarCollapsed,
  activeSection,
  setActiveSection,
  bgActive,
}) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <div
      className={`${sidebarCollapsed ? "w-16" : "w-64"} ${
        bgActive ? "bg-[#1C1C1C]" : "bg-white"
      } border-r border-gray-200 transition-all duration-300 h-screen flex flex-col`}
    >
      <div
        className={`p-4 sticky top-0 z-10 ${
          bgActive ? "bg-[#1C1C1C]" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            alt="Avatar"
            className="w-8 h-8 rounded-2xl object-cover"
          />
          {!sidebarCollapsed && (
            <span className={`font-semibold ${bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"}`}>ByeWind</span>
          )}
        </div>
      </div>

      {/* Scrollable nav section */}
      <nav className="px-4 space-y-5 flex-1 overflow-y-auto sidebar-scroll">
        {sidebarItems.map((section, idx) => (
          <div key={idx}>
            {!sidebarCollapsed && (
              <p className="text-sm font-sm text-gray-500  tracking-wider mb-2 flex items-center">
                {section.category}
              </p>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <button
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      bgActive
                        ? activeSection === item.name
                          ? "bg-[#1C1C1C] text-[#FFFFFF]"
                          : "bg-[#1C1C1C] text-[#FFFFFF] hover:bg-[#404040] hover:text-[#FFFFFF]"
                        : activeSection === item.name
                        ? "bg-gray-100 text-[#1C1C1C] "
                        : "text-[#1C1C1C] hover:bg-gray-50 hover:text-[#1C1C1C]"
                    }`}
                    onClick={() => {
                      if (item.hasSubItems && !sidebarCollapsed) {
                        toggleExpanded(item.name);
                      } else {
                        setActiveSection(item.name);
                      }
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      {!sidebarCollapsed && item.hasSubItems && (
                        <div className="ml-auto">
                          {expandedItems[item.name] ? (
                            <ChevronDown
                              className={`w-4 h-4 ${
                                bgActive
                                  ? "text-[#FFFFFF99]"
                                  : "text-[#1C1C1C33]"
                              }`}
                            />
                          ) : (
                            <ChevronRight
                              className={`w-4 h-4 ${
                                bgActive
                                  ? "text-[#FFFFFF99]"
                                  : "text-[#1C1C1C33]"
                              }`}
                            />
                          )}
                        </div>
                      )}

                      {section.category === "Favorites/Recently" ? (
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            bgActive ? "bg-[#FFFFFF99]" : "bg-gray-400"
                          }`}
                        />
                      ) : (
                        <item.icon
                          color={bgActive ? "#FFFFFF" : "#1C1C1C"}
                          className="w-4 h-4"
                        />
                      )}
                      {!sidebarCollapsed && <span>{item.name}</span>}
                    </div>
                  </button>

                  {!sidebarCollapsed &&
                    item.hasSubItems &&
                    expandedItems[item.name] &&
                    item.subItems && (
                      <ul className="ml-6 mt-1 space-y-1">
                        {item.subItems.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <button
                              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                                bgActive
                                  ? "bg-[#1C1C1C] text-[#FFFFFF] hover:bg-[#404040] hover:text-[#FFFFFF]"
                                  : "text-[#1C1C1C] hover:bg-gray-50 hover:text-[#1C1C1C]"
                              }`}
                              onClick={() => setActiveSection(subItem.name)}
                            >
                              <span>{subItem.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
