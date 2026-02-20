import express from 'express';
import pool from '../db/connection.js';

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.json(
    { message: 'Welcome to the API in my way' }
  );
});

//we get param and query from req
router.get('/blogs/', async (req, res) => {
  try {
    let result;

    // when filtering by id
    if (req.query?.id) {
      let q = `SELECT * FROM blogs WHERE id =${req.query.id}`;
      result = await pool.query(q);
      res.json(result.rows);
      return;
    }

    result = await pool.query('SELECT * FROM blogs');
    res.json(result.rows);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
