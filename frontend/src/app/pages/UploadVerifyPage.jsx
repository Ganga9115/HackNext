import { useState, useRef } from "react";
import {
  Upload,
  FileImage,
  FileVideo,
  X,
  CircleCheck,
  TriangleAlert,
  CircleX,
  Flag,
} from "lucide-react";

export default function UploadVerifyPage({ uploadedMedia, setUploadedMedia }) {
  const [dragActive, setDragActive] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const file = files[0];
    const fileType = file.type.startsWith("image") ? "image" : "video";

    const newMedia = {
      id: Date.now(),
      name: file.name,
      type: fileType,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      uploadedAt: new Date().toLocaleString(),
      analyzed: false,
      result: null,
    };

    setUploadedMedia([newMedia, ...uploadedMedia]);
  };

  const analyzeMedia = (id) => {
    setAnalyzing(true);

    setTimeout(() => {
      const results = [
        {
          status: "authentic",
          confidence: 94,
          issues: [],
          details: "No manipulation detected.",
        },
        {
          status: "suspicious",
          confidence: 67,
          issues: ["Visual artifacts", "Lighting inconsistencies"],
          details: "Possible editing detected.",
        },
        {
          status: "fake",
          confidence: 91,
          issues: ["Face manipulation", "GAN artifacts"],
          details: "High probability of deepfake.",
        },
      ];

      const randomResult =
        results[Math.floor(Math.random() * results.length)];

      setUploadedMedia(
        uploadedMedia.map((m) =>
          m.id === id ? { ...m, analyzed: true, result: randomResult } : m
        )
      );
      setAnalyzing(false);
    }, 2000);
  };

  const removeMedia = (id) => {
    setUploadedMedia(uploadedMedia.filter((m) => m.id !== id));
  };

  const statusBadge = (status) => {
    if (status === "authentic")
      return (
        <span className="text-green-500 flex items-center gap-1 text-sm">
          <CircleCheck className="h-4 w-4" /> Authentic
        </span>
      );
    if (status === "suspicious")
      return (
        <span className="text-yellow-500 flex items-center gap-1 text-sm">
          <TriangleAlert className="h-4 w-4" /> Suspicious
        </span>
      );
    return (
      <span className="text-red-500 flex items-center gap-1 text-sm">
        <CircleX className="h-4 w-4" /> Fake
      </span>
    );
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Upload & Verify Media
        </h1>
        <p className="text-gray-400">
          Upload images or videos to detect manipulation
        </p>
      </div>

      {/* Upload Zone */}
      <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center ${
            dragActive ? "border-blue-500" : "border-gray-700"
          }`}
        >
          <Upload className="h-10 w-10 text-blue-500 mx-auto mb-4" />
          <p className="text-white mb-2">
            Drop files here or click to upload
          </p>

          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Select Files
          </button>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*,video/*"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Uploaded Files */}
      {uploadedMedia.map((media) => (
        <div
          key={media.id}
          className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              {media.type === "image" ? (
                <FileImage className="h-6 w-6 text-blue-500" />
              ) : (
                <FileVideo className="h-6 w-6 text-purple-500" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-white font-medium">{media.name}</p>
                  <p className="text-sm text-gray-400">
                    {media.size} • {media.uploadedAt}
                  </p>
                </div>
                <button
                  onClick={() => removeMedia(media.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {!media.analyzed ? (
                <button
                  onClick={() => analyzeMedia(media.id)}
                  disabled={analyzing}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  {analyzing ? "Analyzing..." : "Analyze Media"}
                </button>
              ) : (
                <div className="space-y-3">
                  {statusBadge(media.result.status)}
                  <p className="text-gray-400 text-sm">
                    Confidence: {media.result.confidence}%
                  </p>

                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className="bg-blue-500 h-2 rounded"
                      style={{ width: `${media.result.confidence}%` }}
                    />
                  </div>

                  <p className="text-sm text-gray-300">
                    {media.result.details}
                  </p>

                  {media.result.status !== "authentic" && (
                    <button
                      onClick={() =>
                        alert("Report submitted (demo only)")
                      }
                      className="border border-red-500 text-red-500 px-4 py-2 rounded-md flex items-center gap-2"
                    >
                      <Flag className="h-4 w-4" />
                      Report Content
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
