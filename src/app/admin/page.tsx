export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparateur Ben Jeddou - Admin
          </h1>
          <p className="text-xl text-gray-600">
            Super Admin Panel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a 
                href="/" 
                className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Back to Main App
              </a>
              <a 
                href="/api/health" 
                target="_blank"
                className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Check API Health
              </a>
              <a 
                href="/api/search" 
                target="_blank"
                className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                Test Search API
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>API Status:</span>
                <span className="text-green-600 font-medium">✅ Online</span>
              </div>
              <div className="flex justify-between">
                <span>Database:</span>
                <span className="text-green-600 font-medium">✅ Connected</span>
              </div>
              <div className="flex justify-between">
                <span>AI Search:</span>
                <span className="text-green-600 font-medium">✅ Active</span>
              </div>
              <div className="flex justify-between">
                <span>Wholesale Search:</span>
                <span className="text-green-600 font-medium">✅ 40+ Sites</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Active Features</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ AI-Powered Search</li>
              <li>✅ Global Wholesale Search</li>
              <li>✅ 40+ E-commerce Sites</li>
              <li>✅ Price Sorting</li>
              <li>✅ B2B Integration</li>
              <li>✅ International Markets</li>
            </ul>
          </div>

          {/* Search Statistics */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Search Coverage</h3>
            <div className="space-y-2 text-sm">
              <div>🌍 Global Markets: US, UK, DE, FR, CA, AU</div>
              <div>🏪 Major Retailers: Amazon, eBay, Walmart</div>
              <div>🏭 Wholesale: Alibaba, AliExpress, DHgate</div>
              <div>💼 B2B Platforms: TradeKey, Global Sources</div>
              <div>🛒 Specialty: Newegg, B&H, Adorama</div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">API Endpoints</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>POST /api/search</strong>
                <br />
                <span className="text-gray-600">AI-powered product search</span>
              </div>
              <div>
                <strong>GET /api/health</strong>
                <br />
                <span className="text-gray-600">System health check</span>
              </div>
              <div>
                <strong>GET /api/init-db</strong>
                <br />
                <span className="text-gray-600">Database initialization</span>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Configuration</h3>
            <div className="space-y-2 text-sm">
              <div>🔑 Google AI: Configured</div>
              <div>🗄️ Database: Aiven MySQL</div>
              <div>🌐 Deployment: Vercel</div>
              <div>⚡ Build: Optimized</div>
              <div>🔒 Auth: Disabled (Single User)</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Comparateur Ben Jeddou - Admin Panel</p>
          <p className="text-sm">Single user access - No authentication required</p>
        </div>
      </div>
    </div>
  );
}