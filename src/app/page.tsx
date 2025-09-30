'use client';

import { useState, useEffect } from 'react';
import { Search, TrendingUp, Bookmark, History, User, LogOut, Settings, BarChart2, PlusCircle, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// Mock data for demonstration
const mockSearchResults = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    currency: 'USD',
    url: 'https://example.com/headphones1',
    seller: 'ElectroMart',
    inStock: true,
    shippingCost: 5.00,
    imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Headphones',
  },
  {
    id: '2',
    name: 'Noise Cancelling Earbuds',
    price: 129.00,
    currency: 'USD',
    url: 'https://example.com/earbuds1',
    seller: 'SoundWorld',
    inStock: true,
    shippingCost: 0.00,
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Earbuds',
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    price: 49.50,
    currency: 'USD',
    url: 'https://example.com/speaker1',
    seller: 'GadgetHub',
    inStock: false,
    shippingCost: 7.50,
    imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Speaker',
  },
];

export default function Home() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productReference, setProductReference] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [userRole, setUserRole] = useState('user'); // 'user', 'admin', 'super_admin'

  useEffect(() => {
    // In a real app, check for a valid JWT token here
    const token = localStorage.getItem('jwt_token');
    if (token) {
      setIsLoggedIn(true);
      // Decode token to get user role
      // setUserRole(decodedToken.role);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productReference) {
      toast.error('Please enter a product reference.');
      return;
    }

    setIsLoading(true);
    setSearchResults([]); // Clear previous results
    toast.loading('Searching for products...');

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productReference }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Search failed');
      }

      const data = await response.json();
      setSearchResults(data.results);
      toast.success(`Found ${data.results.length} results for "${data.normalizedName}"`);
    } catch (error: any) {
      console.error('Search error:', error);
      toast.error(`Search failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = (productId: string) => {
    if (!isLoggedIn) {
      toast.error('Please log in to bookmark products.');
      return;
    }
    toast.success(`Product ${productId} bookmarked! (Mock action)`);
  };

  const handleLogin = () => {
    // Mock login logic
    setIsLoggedIn(true);
    setUserRole('super_admin'); // For demo, set to super_admin
    localStorage.setItem('jwt_token', 'mock_jwt_token');
    toast.success('Logged in as superadmin!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    localStorage.removeItem('jwt_token');
    toast.success('Logged out!');
  };

  return (
    <div className="min-h-screen">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Comparateur Ben Jeddou</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/bookmarks" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200">
                <Bookmark className="h-5 w-5 mr-1" /> Bookmarks
              </a>
              <a href="/history" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200">
                <History className="h-5 w-5 mr-1" /> History
              </a>
              {userRole === 'super_admin' && (
                <a href="/admin" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  <Settings className="h-5 w-5 mr-1" /> Admin
                </a>
              )}
              {isLoggedIn ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5 mr-2" /> Logout
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogin}
                  className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200"
                >
                  <User className="h-5 w-5 mr-2" /> Login
                </motion.button>
              )}
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Find the Best Prices, Instantly.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare prices across multiple sellers, bookmark your top choices, and track price history with AI-powered search.
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  name="query"
                  type="text"
                  placeholder="Enter product name, model, or reference..."
                  className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-3 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-800"
                  disabled={isLoading}
                  value={productReference}
                  onChange={(e) => setProductReference(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:bg-orange-700 focus:ring-3 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" /> Search
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="px-8 py-5 border-b border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900">Search Results ({searchResults.length})</h3>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result) => (
                <motion.div
                  key={result.id}
                  whileHover={{ translateY: -5 }}
                  className="bg-gray-50 rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col"
                >
                  <img src={result.imageUrl} alt={result.name} className="w-full h-40 object-contain mb-4 rounded-md" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{result.name}</h4>
                  <p className="text-3xl font-bold text-orange-600 mb-3">
                    {result.currency} {result.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">Seller: <span className="font-medium">{result.seller}</span></p>
                  <p className={`text-sm font-medium ${result.inStock ? 'text-green-600' : 'text-red-600'} mb-3`}>
                    {result.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">Shipping: {result.shippingCost === 0 ? 'Free' : `${result.currency} ${result.shippingCost.toFixed(2)}`}</p>
                  <div className="mt-auto flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium"
                    >
                      View Deal
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBookmark(result.id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <Bookmark className="h-4 w-4" /> Bookmark
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {searchResults.length === 0 && !isLoading && productReference && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center text-gray-600"
          >
            <p className="text-lg">No results found for "{productReference}". Try a different search term.</p>
          </motion.div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Comparateur Ben Jeddou. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/privacy" className="hover:text-orange-400">Privacy Policy</a> | <a href="/terms" className="hover:text-orange-400">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}