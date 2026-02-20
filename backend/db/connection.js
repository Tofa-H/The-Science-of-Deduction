import { Pool } from 'pg';
import 'dotenv/config';

// Create a new connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test connection and handle errors
try {
    await pool.connect();
    console.log('✓ Connected to PostgreSQL database');
} catch (err) {
    console.error('✗ Database connection error:', err);
}

// Export as ES module
export default pool;