'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Bookmark, 
  History, 
  Star, 
  ShoppingCart, 
  ExternalLink,
  Heart
} from 'lucide-react';
import toast from 'react-hot-toast';

interface SearchResult {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  seller: string;
  url: string;
  image: string;
  rating: number;
  reviews: number;
  shipping: number;
  inStock: boolean;
  badges: string[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set());

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResults: SearchResult[] = [
        {
          id: '1',
          name: `${query} - Premium Edition`,
          price: 299.99,
          originalPrice: 399.99,
          discount: 25,
          seller: 'Amazon',
          url: '#',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
          rating: 4.8,
          reviews: 1250,
          shipping: 0,
          inStock: true,
          badges: ['Best Seller', 'Free Shipping']
        },
        {
          id: '2',
          name: `${query} - Standard Version`,
          price: 199.99,
          seller: 'eBay',
          url: '#',
          image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop',
          rating: 4.5,
          reviews: 890,
          shipping: 9.99,
          inStock: true,
          badges: ['Fast Shipping']
        },
        {
          id: '3',
          name: `${query} - Professional Model`,
          price: 449.99,
          originalPrice: 599.99,
          discount: 25,
          seller: 'Best Buy',
          url: '#',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
          rating: 4.9,
          reviews: 2100,
          shipping: 0,
          inStock: true,
          badges: ['Premium', 'Warranty Included']
        }
      ];
      
      setSearchResults(mockResults);
      toast.success(`Found ${mockResults.length} results for "${query}"`);
    } catch (error) {
      toast.error('Search failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleBookmark = (itemId: string) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks.has(itemId)) {
      newBookmarks.delete(itemId);
      toast.success('Removed from bookmarks');
    } else {
      newBookmarks.add(itemId);
      toast.success('Added to bookmarks');
    }
    setBookmarkedItems(newBookmarks);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PriceComparator Pro
                </h1>
                <p className="text-xs text-gray-500">AI-Powered Price Comparison</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="/admin" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark className="h-5 w-5 mr-1" />
                Admin
              </a>
              <a href="/api/health" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <History className="h-5 w-5 mr-1" />
                Health
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Find the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Best Deals</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare prices across multiple retailers with our AI-powered search engine. 
            Save money and discover amazing deals.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="w-full pl-12 pr-32 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-lg"
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  onClick={() => handleSearch(searchQuery)}
                  disabled={isLoading || !searchQuery.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    'Search'
                  )}
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'].map((category) => (
                <button
                  key={category}
                  onClick={() => handleSearch(category)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Search Results ({searchResults.length})
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
                        bookmarkedItems.has(item.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    {item.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h4>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} ({item.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(item.price)}
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice)}
                        </div>
                      )}
                    </div>
                    {item.discount && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        -{item.discount}%
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="font-medium">{item.seller}</span>
                    <span>{item.shipping === 0 ? 'Free Shipping' : `+${formatPrice(item.shipping)}`}</span>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={item.url}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                      Compare
                    </button>
                  </div>

                  {!item.inStock && (
                    <div className="mt-2 text-center">
                      <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {searchResults.length === 0 && !isLoading && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Start Your Search
              </h3>
              <p className="text-gray-600 mb-6">
                Enter a product name or browse our popular categories to find the best deals.
              </p>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">PriceComparator Pro</span>
              </div>
              <p className="text-gray-400">
                Find the best deals with our AI-powered price comparison platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI-Powered Search</li>
                <li>Price Tracking</li>
                <li>Smart Bookmarks</li>
                <li>Price Alerts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>API Documentation</li>
                <li>Status Page</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PriceComparator Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}