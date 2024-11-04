import express from 'express';
import pg from 'pg';

const { Pool } = pg;

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'user',
  host: 'postgres',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json({
      message: 'Hello from Node.js!',
      users: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
