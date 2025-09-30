export default function AdminPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparateur Ben Jeddou - Admin
          </h1>
          <p className="text-xl text-orange-600 font-medium">
            Super Admin Panel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Actions</h3>
            <div className="space-y-3">
              <a 
                href="/" 
                className="block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Back to Main App
              </a>
              <a 
                href="/api/health" 
                target="_blank"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Check API Health
              </a>
              <a 
                href="/api/search" 
                target="_blank"
                className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Test Search API
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">System Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">API Status:</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">✅ Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">AI Search:</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">✅ Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Global Sites:</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">✅ 40+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Wholesale:</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-semibold">✅ Enabled</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Active Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">AI-Powered Search</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Global Wholesale Search</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">40+ E-commerce Sites</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Price Sorting</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">B2B Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">International Markets</span>
              </li>
            </ul>
          </div>

          {/* Search Coverage */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Search Coverage</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-700">🌍 Global Markets: US, UK, DE, FR, CA, AU</div>
              <div className="text-gray-700">🏪 Major Retailers: Amazon, eBay, Walmart</div>
              <div className="text-gray-700">🏭 Wholesale: Alibaba, AliExpress, DHgate</div>
              <div className="text-gray-700">💼 B2B Platforms: TradeKey, Global Sources</div>
              <div className="text-gray-700">🛒 Specialty: Newegg, B&H, Adorama</div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">API Endpoints</h3>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="font-semibold text-orange-800 text-sm">POST /api/search</div>
                <div className="text-xs text-orange-600">AI-powered product search</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-800 text-sm">GET /api/health</div>
                <div className="text-xs text-green-600">System health check</div>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Configuration</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Google AI:</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Configured</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Deployment:</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Vercel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Build:</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Optimized</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Auth:</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">Single User</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Comparateur Ben Jeddou - Admin Panel</h4>
            <p className="text-orange-600 font-medium">Single user access - No authentication required</p>
          </div>
        </div>
      </div>
    </div>
  );
}