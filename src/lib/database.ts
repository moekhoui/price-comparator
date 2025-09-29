import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'price_comparator',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

export const db = mysql.createPool(dbConfig);

// Database initialization
export async function initializeDatabase() {
  try {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      port: dbConfig.port,
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
    await connection.end();

    // Create tables
    await createTables();
    await createSuperAdmin();
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

async function createTables() {
  // Users table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role ENUM('user', 'admin', 'super_admin') DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  // Products table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      category VARCHAR(100),
      image_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  // Price listings table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS price_listings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      seller_name VARCHAR(100) NOT NULL,
      seller_url VARCHAR(500) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      shipping_cost DECIMAL(10,2) DEFAULT 0,
      in_stock BOOLEAN DEFAULT TRUE,
      last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  // Bookmarks table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS bookmarks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      product_id INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
      UNIQUE KEY unique_user_product (user_id, product_id)
    )
  `);

  // Price history table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS price_history (
      id INT AUTO_INCREMENT PRIMARY KEY,
      price_listing_id INT,
      price DECIMAL(10,2) NOT NULL,
      recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (price_listing_id) REFERENCES price_listings(id) ON DELETE CASCADE
    )
  `);

  // Search history table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS search_history (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      query VARCHAR(255) NOT NULL,
      results_count INT DEFAULT 0,
      searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);
}

async function createSuperAdmin() {
  const bcrypt = require('bcryptjs');
  const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD || 'admin123';
  const hashedPassword = await bcrypt.hash(superAdminPassword, 12);

  await db.execute(`
    INSERT IGNORE INTO users (username, email, password_hash, role) 
    VALUES ('superadmin', 'admin@pricecomparator.com', ?, 'super_admin')
  `, [hashedPassword]);
}