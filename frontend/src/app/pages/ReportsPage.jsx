import { useState } from "react";
import {
  FileText,
  ListFilter,
  Search,
  Clock,
  CircleCheck,
  AlertCircle,
} from "lucide-react";

const mockReports = [
  {
    id: "RPT-2601-001",
    mediaName: "suspicious_video.mp4",
    mediaType: "Video",
    reason: "Deepfake Content",
    submittedAt: "2026-01-05 14:32",
    status: "under_review",
  },
  {
    id: "RPT-2601-002",
    mediaName: "edited_image.jpg",
    mediaType: "Image",
    reason: "Heavy Editing",
    submittedAt: "2026-01-04 09:15",
    status: "action_taken",
  },
  {
    id: "RPT-2512-089",
    mediaName: "fake_profile.png",
    mediaType: "Image",
    reason: "Impersonation",
    submittedAt: "2025-12-28 16:45",
    status: "action_taken",
  },
  {
    id: "RPT-2512-075",
    mediaName: "manipulated_clip.mov",
    mediaType: "Video",
    reason: "Fraud",
    submittedAt: "2025-12-20 11:20",
    status: "submitted",
  },
  {
    id: "RPT-2512-062",
    mediaName: "altered_document.jpg",
    mediaType: "Image",
    reason: "Heavy Editing",
    submittedAt: "2025-12-15 08:30",
    status: "action_taken",
  },
];

export default function ReportsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status) => {
    if (status === "submitted") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-blue-500/10 text-blue-500">
          <Clock className="h-3 w-3" />
          Submitted
        </span>
      );
    }
    if (status === "under_review") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-yellow-500/10 text-yellow-500">
          <AlertCircle className="h-3 w-3" />
          Under Review
        </span>
      );
    }
    if (status === "action_taken") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-green-500/10 text-green-500">
          <CircleCheck className="h-3 w-3" />
          Action Taken
        </span>
      );
    }
    return null;
  };

  const filteredReports = mockReports.filter((report) => {
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;
    const matchesSearch =
      report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.mediaName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Reports Log</h1>
          <p className="text-gray-400">
            Track and manage all your submitted reports
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-blue-500/20 bg-blue-600/10">
            <p className="text-blue-400 text-sm">Total Reports</p>
            <p className="text-3xl font-bold text-white">
              {mockReports.length}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-yellow-500/20 bg-yellow-600/10">
            <p className="text-yellow-400 text-sm">Under Review</p>
            <p className="text-3xl font-bold text-white">
              {mockReports.filter((r) => r.status === "under_review").length}
            </p>
          </div>

          <div className="p-6 rounded-lg border border-green-500/20 bg-green-600/10">
            <p className="text-green-400 text-sm">Action Taken</p>
            <p className="text-3xl font-bold text-white">
              {mockReports.filter((r) => r.status === "action_taken").length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Report ID or media name..."
              className="w-full pl-10 bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white"
          >
            <option value="all">All Status</option>
            <option value="submitted">Submitted</option>
            <option value="under_review">Under Review</option>
            <option value="action_taken">Action Taken</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-800 text-gray-400">
              <tr>
                <th className="px-4 py-3">Report ID</th>
                <th className="px-4 py-3">Media Name</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="border-t border-gray-800 hover:bg-gray-800/30"
                >
                  <td className="px-4 py-3 text-blue-400 font-medium">
                    {report.id}
                  </td>
                  <td className="px-4 py-3 text-white">
                    {report.mediaName}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {report.mediaType}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {report.reason}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {report.submittedAt}
                  </td>
                  <td className="px-4 py-3">
                    {getStatusBadge(report.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredReports.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No reports found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
