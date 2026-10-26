import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// GET /api/categories -> list all categories (used by the product form dropdown)
export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.query(
      'SELECT id, name FROM categories ORDER BY name ASC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
