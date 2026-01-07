import { User, Bell, Shield, Database, Mail } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">
            Manage your account preferences and security settings
          </p>
        </div>

        {/* Profile Settings */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <User className="h-5 w-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-white">
              Profile Information
            </h2>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm">First Name</label>
                <input
                  defaultValue="John"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm">Last Name</label>
                <input
                  defaultValue="Doe"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Email Address</label>
              <input
                type="email"
                defaultValue="user@example.com"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-5 w-5 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              "Email Notifications",
              "Report Status Updates",
              "Detection Alerts",
              "Weekly Summary",
            ].map((label, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0"
              >
                <p className="text-white">{label}</p>
                <input type="checkbox" defaultChecked className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-5 w-5 text-green-500" />
            <h2 className="text-xl font-semibold text-white">Security</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
              />
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium">
              Update Password
            </button>

            <div className="flex items-center justify-between pt-6 border-t border-gray-800">
              <p className="text-white">Two-Factor Authentication</p>
              <input type="checkbox" className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-5 w-5 text-yellow-500" />
            <h2 className="text-xl font-semibold text-white">
              Data & Privacy
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-white">Save Upload History</p>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white">Anonymous Analytics</p>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-medium mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Data Export
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Download all your data including reports and account info.
              </p>
              <button className="border border-yellow-500/50 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500/10">
                Request Data Export
              </button>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-red-500 font-medium mb-2">
                Delete Account
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Permanently delete your account and all associated data.
              </p>
              <button className="border border-red-500/50 text-red-500 px-4 py-2 rounded-md hover:bg-red-500/10">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
