import { useState } from "react";
import { Shield, Lock, ArrowLeft } from "lucide-react";

export default function LoginPage({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("landing")}
          className="flex items-center text-gray-400 hover:text-white mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>

        {/* Login Card */}
        <div className="bg-gray-900/80 border border-gray-800 backdrop-blur-sm p-8 rounded-xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500/10 p-3 rounded-full">
                <Shield className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400">
              Sign in to your TruthGuard account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-gray-300 text-sm font-medium"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-400">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => onNavigate("signup")}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Create one
              </button>
            </p>
          </div>

          {/* Security Message */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-start gap-3 text-sm">
              <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400">
                Secure login with end-to-end encryption. Your credentials are
                protected and never stored in plain text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
