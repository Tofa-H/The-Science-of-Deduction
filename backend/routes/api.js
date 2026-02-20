import express from 'express';
import pool from '../db/connection.js';

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.json(
    { message: 'Welcome to the API in my way' }
  );
});

router.get('/blogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs');
    res.json(result.rows);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
