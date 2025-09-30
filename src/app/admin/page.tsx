export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comparateur Ben Jeddou - Admin
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Super Admin Panel
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">✅ Admin Panel Working!</h2>
          <p className="text-gray-700 mb-4">
            Admin dashboard is functioning correctly.
          </p>
          <div className="space-y-2">
            <a 
              href="/" 
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Main App
            </a>
            <button 
              onClick={() => fetch('/api/init-db', { method: 'POST' }).then(r => r.json()).then(d => alert(d.message || 'Success'))}
              className="block w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Initialize Database
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}