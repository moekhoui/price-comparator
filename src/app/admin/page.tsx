import { TrendingUp, Globe, Zap, Shield, Award, Search, Activity, Database, Settings, Users, BarChart3, ExternalLink } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Comparateur Ben Jeddou - Admin
                </h1>
                <p className="text-orange-600 font-medium">Super Admin Panel</p>
              </div>
            </div>
            <a 
              href="/" 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Back to App
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">API Status</p>
                <p className="text-2xl font-bold text-green-600">Online</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">AI Search</p>
                <p className="text-2xl font-bold text-orange-600">Active</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Global Sites</p>
                <p className="text-2xl font-bold text-blue-600">40+</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Wholesale</p>
                <p className="text-2xl font-bold text-purple-600">Enabled</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-orange-500" />
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a 
                  href="/api/health" 
                  target="_blank"
                  className="block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-xl font-semibold transition-all text-center shadow-lg"
                >
                  Check API Health
                </a>
                <a 
                  href="/api/search" 
                  target="_blank"
                  className="block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-xl font-semibold transition-all text-center shadow-lg"
                >
                  Test Search API
                </a>
                <a 
                  href="/" 
                  className="block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-3 rounded-xl font-semibold transition-all text-center shadow-lg"
                >
                  Go to Main App
                </a>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Active Features */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  Active Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">AI-Powered Search</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Global Wholesale Search</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">40+ E-commerce Sites</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Price Sorting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">B2B Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">International Markets</span>
                  </li>
                </ul>
              </div>

              {/* Search Coverage */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-orange-500" />
                  Search Coverage
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🌍</span>
                    <span className="text-gray-700">Global Markets: US, UK, DE, FR, CA, AU</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🏪</span>
                    <span className="text-gray-700">Major Retailers: Amazon, eBay, Walmart</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🏭</span>
                    <span className="text-gray-700">Wholesale: Alibaba, AliExpress, DHgate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">💼</span>
                    <span className="text-gray-700">B2B Platforms: TradeKey, Global Sources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🛒</span>
                    <span className="text-gray-700">Specialty: Newegg, B&H, Adorama</span>
                  </div>
                </div>
              </div>

              {/* API Endpoints */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Database className="h-5 w-5 text-orange-500" />
                  API Endpoints
                </h3>
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800">POST /api/search</div>
                    <div className="text-sm text-orange-600">AI-powered product search</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800">GET /api/health</div>
                    <div className="text-sm text-green-600">System health check</div>
                  </div>
                </div>
              </div>

              {/* Configuration */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-orange-500" />
                  Configuration
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Google AI</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Configured</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Deployment</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Vercel</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Build</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Optimized</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Auth</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">Single User</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Comparateur Ben Jeddou - Admin Panel</h4>
            <p className="text-orange-600 font-medium">Single user access - No authentication required</p>
          </div>
        </div>
      </div>
    </div>
  );
}