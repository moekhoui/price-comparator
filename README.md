# PriceComparator Pro 🛒

A modern, AI-powered price comparison platform built with Next.js 15, React 19, and TypeScript. Features beautiful UI, smart search capabilities, and comprehensive admin dashboard.

## ✨ Features

### 🎯 Core Features
- **AI-Powered Search**: Enhanced product search with Google Gemini AI
- **Price Comparison**: Compare prices across multiple retailers
- **Smart Bookmarks**: Save and organize favorite products
- **Price Tracking**: Monitor price changes over time
- **User Management**: Complete admin dashboard with user roles
- **Responsive Design**: Beautiful, modern UI that works on all devices

### 🎨 UI/UX Features
- **Modern Design**: Gradient backgrounds, glass effects, and smooth animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Tailwind CSS**: Utility-first styling with custom components
- **Responsive Layout**: Mobile-first design approach
- **Dark Mode Ready**: CSS variables for easy theme switching

### 🔧 Technical Features
- **Next.js 15**: Latest App Router with React Server Components
- **TypeScript**: Full type safety throughout the application
- **MySQL Database**: Robust data storage with proper relationships
- **Authentication**: JWT-based auth with role-based access control
- **API Routes**: RESTful API endpoints for all operations
- **Error Handling**: Comprehensive error handling and user feedback

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MySQL 8.0+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd price-comparator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=price_comparator
   DB_PORT=3306

   # Google AI API Key (optional, for enhanced search)
   GOOGLE_AI_API_KEY=your_google_ai_api_key

   # Super Admin Password
   SUPER_ADMIN_PASSWORD=admin123

   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Initialize Database**
   ```bash
   # Start the development server
   npm run dev

   # In another terminal, initialize the database
   curl -X POST http://localhost:3000/api/init-db
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the application!

## 🎯 Super Admin Access

The application comes with a pre-configured super admin account:

- **Username**: `superadmin`
- **Email**: `admin@pricecomparator.com`
- **Password**: `admin123` (or your custom password from env)
- **Access**: `/admin` dashboard

## 📱 Pages & Features

### 🏠 Home Page (`/`)
- Hero section with gradient design
- AI-powered search bar
- Quick category filters
- Search results with product cards
- Bookmark functionality
- Price comparison display

### 👑 Admin Dashboard (`/admin`)
- User management with CRUD operations
- System statistics and analytics
- Database initialization tools
- Role-based access control
- Search and filter users

### 🔍 Search Features
- Real-time search suggestions
- AI-enhanced product matching
- Price range filtering
- Seller filtering
- Sort by price, rating, reviews

### 💾 Data Management
- User accounts and authentication
- Product listings and price tracking
- Bookmark management
- Search history
- Price history tracking

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **React Hot Toast**: Notifications

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **MySQL**: Relational database
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **Google Generative AI**: AI-powered search enhancement

### Development
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📊 Database Schema

### Users Table
- User authentication and roles
- Support for user, admin, and super_admin roles

### Products Table
- Product information and metadata
- Category and image support

### Price Listings Table
- Seller information and pricing
- Stock status and shipping costs

### Bookmarks Table
- User bookmark management
- Many-to-many relationship with products

### Price History Table
- Historical price tracking
- Time-series data for analytics

### Search History Table
- User search tracking
- Analytics and recommendations

## 🔧 API Endpoints

### Search
- `POST /api/search` - AI-powered product search

### Admin
- `GET /api/admin/users` - List all users
- `POST /api/admin/users` - Create new user
- `PUT /api/admin/users/[id]` - Update user
- `DELETE /api/admin/users/[id]` - Delete user

### Database
- `POST /api/init-db` - Initialize database and tables

## 🎨 Design System

### Colors
- Primary: Blue gradient (`#3b82f6` to `#8b5cf6`)
- Secondary: Gray scale with proper contrast
- Accent: Green for success, red for errors
- Background: Gradient from blue to purple

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold with gradient text
- Body: Clean and readable

### Components
- Cards with hover effects and shadows
- Buttons with multiple variants
- Form inputs with focus states
- Loading states and animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
DB_HOST=your_production_db_host
DB_USER=your_db_user
DB_PASSWORD=your_secure_password
DB_NAME=price_comparator_prod
GOOGLE_AI_API_KEY=your_production_api_key
SUPER_ADMIN_PASSWORD=your_secure_admin_password
JWT_SECRET=your_production_jwt_secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js, React, and modern web technologies.**