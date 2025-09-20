import {
  BarChart3,
  Building2,
  FileText,
  FolderOpen,
  MessageSquare,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

const sidebarItems = [
  {
    category: "Favorites",
    items: [
      { name: "Overview", icon: BarChart3, active: false },
      { name: "Projects", icon: FolderOpen, active: false },
    ],
  },
  {
    category: "Recently",
    items: [],
  },
  {
    category: "Dashboards",
    items: [
      { name: "Default", icon: BarChart3, active: false },
      { name: "eCommerce", icon: ShoppingCart, active: true },
      { name: "Projects", icon: FolderOpen, active: false },
      { name: "Online Courses", icon: FileText, active: false },
      { name: "Orders", icon: FileText, active: false },
    ],
  },
  {
    category: "Pages",
    items: [
      { name: "User Profile", icon: User, active: false },
      { name: "Account", icon: Settings, active: false },
      { name: "Corporate", icon: Building2, active: false },
      { name: "Blog", icon: FileText, active: false },
      { name: "Social", icon: MessageSquare, active: false },
    ],
  },
];

const Sidebar = ({ sidebarCollapsed, activeSection, setActiveSection }) => {
  return (
    <div
      className={`${
        sidebarCollapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 h-screen overflow-y-hidden`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">B</span>
          </div>
          {!sidebarCollapsed && (
            <span className="font-semibold text-[#1C1C1C]">ByeWind</span>
          )}
        </div>
      </div>

      <nav className="px-4 space-y-6">
        {sidebarItems.map((section, idx) => (
          <div key={idx}>
            {!sidebarCollapsed && (
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                {section.category}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === item.name
                        ? "bg-gray-100 text-[#1C1C1C] font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#1C1C1C]"
                    }`}
                    onClick={() => setActiveSection(item.name)}
                  >
                    {section.category === "Favorites" ? (
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-400" />
                    ) : (
                      <item.icon className="w-4 h-4" />
                    )}
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </button>
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
