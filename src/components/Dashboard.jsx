"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("Default");
  const [bgActive, setBgActive] = useState(false); // Add theme state
  console.log("bgActive:", bgActive)

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
      />
      <RightSidebar bgActive={bgActive} />
    </div>
  );
}
