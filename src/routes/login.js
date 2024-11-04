import express from 'express';
import { authenticateUser } from '../auth/auth.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const isAuthenticated = await authenticateUser(email, password);
  if (!isAuthenticated) {
    return res.status(403).json('Invalid credentials or email not verified.');
  }
  res.status(200).json('You are logged in successfully.');
});

export default router;
