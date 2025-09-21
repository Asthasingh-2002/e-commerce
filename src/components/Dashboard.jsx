"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("Default");
  const [bgActive, setBgActive] = useState(false);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false); // Add this

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        bgActive={bgActive}
      />
      <MainContent
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarCollapsed={sidebarCollapsed}
        activeSection={activeSection}
        bgActive={bgActive}
        setBgActive={setBgActive}
        rightSidebarCollapsed={rightSidebarCollapsed} // Pass down
        setRightSidebarCollapsed={setRightSidebarCollapsed} // Pass down
      />
      <RightSidebar bgActive={bgActive} collapsed={rightSidebarCollapsed} />{" "}
      {/* Pass collapsed */}
    </div>
  );
}
