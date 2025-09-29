import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'PriceComparator Pro API is running',
    timestamp: new Date().toISOString()
  });
}
