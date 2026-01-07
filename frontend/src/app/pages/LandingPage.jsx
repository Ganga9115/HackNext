import { Shield, Zap, FileCheck, Lock, Eye, TriangleAlert } from "lucide-react";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-gray-950/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-semibold text-white">TruthGuard</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("login")}
              className="text-white hover:text-blue-400 font-medium"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("signup")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm">
            <Shield className="h-4 w-4" />
            <span>AI-Powered Media Verification</span>
          </div>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Verify Before You Trust
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Protect yourself from manipulated media. Our advanced AI technology
            detects deepfakes, edited photos, and synthetic videos in
            seconds—helping you distinguish fact from fiction.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("signup")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg font-medium"
            >
              Start Verifying
            </button>

            <button
              onClick={() => onNavigate("login")}
              className="border border-gray-600 text-white hover:bg-white/10 text-lg px-8 py-3 rounded-lg font-medium"
            >
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 pt-8">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-500" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Instant Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-blue-500" />
              <span>99% Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features to Combat Misinformation
          </h2>
          <p className="text-gray-400 text-lg">
            Industry-leading technology designed for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-blue-500/50 transition-all">
            <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              AI-Powered Detection
            </h3>
            <p className="text-gray-400">
              Advanced neural networks analyze visual artifacts, metadata
              inconsistencies, and manipulation patterns.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-purple-500/50 transition-all">
            <div className="bg-purple-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Instant Verification
            </h3>
            <p className="text-gray-400">
              Upload any image or video and receive a detailed authenticity
              report in seconds.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all">
            <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <TriangleAlert className="h-7 w-7 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Easy Reporting
            </h3>
            <p className="text-gray-400">
              Report suspicious content and contribute to a safer digital
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Fight Misinformation?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users protecting themselves from fake media.
          </p>
          <button
            onClick={() => onNavigate("signup")}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-semibold"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-950/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8 flex justify-between text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            <span>© 2026 TruthGuard. Fighting fake media.</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-green-500" />
            <span>Your data is protected</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
