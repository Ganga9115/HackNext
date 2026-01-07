import { useState } from "react";
import { Flag, CircleCheck, X } from "lucide-react";

export default function ReportFormDialog({ open, onOpenChange, media }) {
  const [reason, setReason] = useState("deepfake");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setReason("deepfake");
      setDescription("");
      onOpenChange(false);
    }, 2000);
  };

  if (!open || !media) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full p-6 relative text-white">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Flag className="h-6 w-6 text-red-500" />
                Report Suspicious Content
              </h2>
              <p className="text-gray-400 mt-2">
                Help us combat misinformation by reporting this content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Media Info */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">
                  Content being reported:
                </p>
                <p className="font-medium">{media.name}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Detected as: {media.result?.status} (
                  {media.result?.confidence}% confidence)
                </p>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <p className="text-gray-300 font-medium">
                  Reason for Reporting
                </p>

                {[
                  ["deepfake", "Deepfake Content"],
                  ["heavy-editing", "Heavy Editing / Manipulation"],
                  ["impersonation", "Impersonation / Identity Theft"],
                  ["fraud", "Fraud / Scam Content"],
                  ["other", "Other"],
                ].map(([value, label]) => (
                  <label
                    key={value}
                    className="flex items-center gap-3 bg-gray-800/40 p-3 rounded-lg cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={value}
                      checked={reason === value}
                      onChange={() => setReason(value)}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-gray-300 font-medium">
                  Additional Details (Optional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide any additional context..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder:text-gray-500 min-h-[100px]"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="flex-1 border border-gray-700 text-gray-300 rounded-md py-2 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-md py-2 flex items-center justify-center gap-2"
                >
                  <Flag className="h-4 w-4" />
                  Submit Report
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success */
          <div className="py-10 text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-green-500/10 p-4 rounded-full">
                <CircleCheck className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Report Submitted</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Thank you for helping combat misinformation. Your report will be
              reviewed within 24–48 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
