import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Load environment variables if not in Next.js runtime
if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
  require('dotenv').config();
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
