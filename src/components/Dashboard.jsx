"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  Settings,
  Moon,
  RotateCcw,
  Menu,
  Star,
  TrendingUp,
  TrendingDown,
  MapPin,
} from "lucide-react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function Dashboard() {
  //   const [activeSection, setActiveSection] = useState("eCommerce");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar sidebarCollapsed={sidebarCollapsed} /> {/* Main Content */}
      {/*  Main Content */}
      <MainContent
        setSidebarCollapsed={setSidebarCollapsed}
        sidebarCollapsed={sidebarCollapsed}
      />
      {/* <RightSidebar /> */}
      <RightSidebar />
      
    </div>
  );
}
