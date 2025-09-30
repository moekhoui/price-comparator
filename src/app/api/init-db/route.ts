import { NextRequest, NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    
    return NextResponse.json({
      message: 'Database initialized successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Database initialization failed:', error);
    return NextResponse.json(
      { 
        error: 'Database initialization failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    
    return NextResponse.json({
      message: 'Database initialized successfully',
      timestamp: new Date().toISOString(),
      superAdmin: {
        username: 'superadmin',
        email: 'admin@pricecomparator.com',
        password: 'admin123'
      }
    });

  } catch (error) {
    console.error('Database initialization failed:', error);
    return NextResponse.json(
      { 
        error: 'Database initialization failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

