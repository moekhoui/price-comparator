'use client';

import { useState } from 'react';
import { Search, TrendingUp, Bookmark, History, Star, ShoppingCart, ExternalLink, Heart, Loader2 } from 'lucide-react';
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
  source: string;
  isWholesale?: boolean;
  minOrderQuantity?: number;
  bulkDiscount?: number;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set());

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      toast.error('Please enter a product to search for');
      return;
    }
    
    setIsLoading(true);
    setSearchResults([]);
    
    try {
      toast.loading('Searching global markets...', { duration: 2000 });
      
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productReference: query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Search failed');
      }

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const sortedResults = data.results.sort((a: SearchResult, b: SearchResult) => a.price - b.price);
        setSearchResults(sortedResults);
        toast.success(`Found ${sortedResults.length} products!`);
      } else {
        toast.error('No products found');
      }
    } catch (error: any) {
      console.error('Search error:', error);
      toast.error(`Search failed: ${error.message}`);
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-gradient rounded-xl shadow-orange">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-orange-gradient">
                  Comparateur Ben Jeddou
                </h1>
                <p className="text-sm text-orange-600 font-medium">AI-Powered Global Price Comparison</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/admin" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                <Bookmark className="h-5 w-5 mr-2" />
                Admin
              </a>
              <a href="/api/health" className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                <History className="h-5 w-5 mr-2" />
                Health
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium text-sm mb-6">
            🌍 Search 40+ Global E-commerce Sites
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Find the <span className="text-orange-gradient">Best Deals</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Search the entire web with AI to compare wholesale and retail prices across global markets. 
            Find the best deals from 40+ e-commerce sites including wholesale suppliers and B2B platforms.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-orange-400" />
              </div>
              <input
                type="text"
                placeholder="Enter product name, model, or reference (e.g., iPhone 15, Samsung Galaxy S24, MacBook Pro M3)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                className="w-full pl-16 pr-40 py-5 text-lg border-2 border-orange-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-lg bg-white/80 backdrop-blur-sm"
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  onClick={() => handleSearch(searchQuery)}
                  disabled={isLoading || !searchQuery.trim()}
                  className="bg-orange-gradient hover-orange text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      Search Web
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Search Examples */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['iPhone 15', 'Samsung Galaxy S24', 'MacBook Pro M3', 'PlayStation 5', 'Nike Air Max'].map((example) => (
                <button
                  key={example}
                  onClick={() => {
                    setSearchQuery(example);
                    handleSearch(example);
                  }}
                  className="px-4 py-2 bg-white/60 hover:bg-orange-100 border border-orange-200 rounded-full text-sm font-medium transition-all duration-200 text-orange-700 hover:text-orange-800"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                <Loader2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI is searching global markets...
              </h3>
              <p className="text-gray-600 text-lg">
                Analyzing product references across 40+ e-commerce sites including wholesale suppliers, B2B platforms, and international markets.
              </p>
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-gray-900">
                Search Results ({searchResults.length})
              </h3>
              <div className="flex items-center gap-2 text-orange-600 font-medium">
                💡 Results sorted from lowest to highest
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=Product+Image';
                      }}
                    />
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                        bookmarkedItems.has(item.id)
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/90 text-gray-600 hover:bg-orange-500 hover:text-white'
                      }`}
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    {item.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="absolute top-3 left-3 bg-orange-gradient text-white px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-bold text-gray-900 mb-3 text-lg line-clamp-2">
                    {item.name}
                  </h4>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} ({item.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {formatPrice(item.price)}
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice)}
                        </div>
                      )}
                    </div>
                    {item.discount && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                        -{item.discount}%
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="font-semibold">{item.seller}</span>
                    <span className="text-orange-600 font-medium">{item.shipping === 0 ? 'Free Shipping' : `+${formatPrice(item.shipping)}`}</span>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-medium">Source:</span> {item.source}
                    {item.isWholesale && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="bg-orange-gradient text-white px-2 py-1 rounded text-xs font-bold">
                          WHOLESALE
                        </span>
                        {item.minOrderQuantity && (
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                            Min: {item.minOrderQuantity}+
                          </span>
                        )}
                        {item.bulkDiscount && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Bulk: -{item.bulkDiscount}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-gradient hover-orange text-white px-4 py-3 rounded-xl text-center font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View on {item.seller}
                    </a>
                  </div>

                  {!item.inStock && (
                    <div className="mt-3 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {searchResults.length === 0 && !isLoading && (
          <div className="text-center py-20 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your AI-Powered Search
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Enter a product name, model, or reference to search the entire web and find the best wholesale and retail prices.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-gradient rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Comparateur Ben Jeddou</span>
              </div>
              <p className="text-gray-400 text-lg">
                AI-powered wholesale and retail price comparison platform that searches 40+ global e-commerce sites to find the best deals.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Features</h4>
              <ul className="space-y-3 text-gray-400">
                <li>AI-Powered Global Search</li>
                <li>Wholesale & Retail Pricing</li>
                <li>B2B Platform Integration</li>
                <li>40+ E-commerce Sites</li>
                <li>International Markets</li>
                <li>Bulk Discount Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>API Documentation</li>
                <li>Status Page</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Comparateur Ben Jeddou. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}