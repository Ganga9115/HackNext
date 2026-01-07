import { FileCheck, TriangleAlert, TrendingUp, Activity } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Aug", analyzed: 45, fake: 12, authentic: 33 },
  { month: "Sep", analyzed: 62, fake: 18, authentic: 44 },
  { month: "Oct", analyzed: 78, fake: 25, authentic: 53 },
  { month: "Nov", analyzed: 94, fake: 31, authentic: 63 },
  { month: "Dec", analyzed: 112, fake: 38, authentic: 74 },
  { month: "Jan", analyzed: 135, fake: 45, authentic: 90 },
];

const statusDistribution = [
  { name: "Authentic", value: 357, color: "#10b981" },
  { name: "Suspicious", value: 89, color: "#f59e0b" },
  { name: "Fake", value: 169, color: "#ef4444" },
];

const detectionCategories = [
  { category: "Deepfake", count: 78 },
  { category: "Face Swap", count: 45 },
  { category: "Heavy Editing", count: 32 },
  { category: "Metadata Tampering", count: 14 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Analytics Overview
          </h1>
          <p className="text-gray-400">
            Track platform activity and detection trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Metric Card */}
          <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-blue-600/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Activity className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +23%
              </span>
            </div>
            <p className="text-blue-400 text-sm mb-1">Total Analyzed</p>
            <p className="text-3xl font-bold text-white">615</p>
          </div>

          <div className="rounded-lg border border-green-500/20 bg-gradient-to-br from-green-600/20 to-green-600/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <FileCheck className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18%
              </span>
            </div>
            <p className="text-green-400 text-sm mb-1">Authentic Media</p>
            <p className="text-3xl font-bold text-white">357</p>
          </div>

          <div className="rounded-lg border border-red-500/20 bg-gradient-to-br from-red-600/20 to-red-600/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <TriangleAlert className="h-6 w-6 text-red-500" />
              </div>
              <span className="text-red-400 text-sm flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +31%
              </span>
            </div>
            <p className="text-red-400 text-sm mb-1">Fake Detected</p>
            <p className="text-3xl font-bold text-white">169</p>
          </div>

          <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-purple-600/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <FileCheck className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-green-400 text-sm flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12%
              </span>
            </div>
            <p className="text-purple-400 text-sm mb-1">
              Reports Submitted
            </p>
            <p className="text-3xl font-bold text-white">143</p>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            Monthly Detection Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorAnalyzed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorFake" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="analyzed"
                stroke="#3b82f6"
                fill="url(#colorAnalyzed)"
              />
              <Area
                type="monotone"
                dataKey="fake"
                stroke="#ef4444"
                fill="url(#colorFake)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
