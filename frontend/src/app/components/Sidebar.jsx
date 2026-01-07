import {
  Shield,
  LayoutDashboard,
  Upload,
  FileText,
  ChartBar,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage, onLogout }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "upload", label: "Upload & Verify", icon: Upload },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "analytics", label: "Analytics", icon: ChartBar },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-semibold text-white">TruthGuard</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="mb-3 px-4 py-2">
          <p className="text-sm text-gray-400">Signed in as</p>
          <p className="text-white font-medium">user@example.com</p>
        </div>

        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
