import express from 'express';
import { verifyUser } from '../auth/auth.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, verification_code } = req.body;

  try {
    const user = await verifyUser(email, verification_code);

    if (!user) {
      return res.status(400).json({ error: 'Invalid verification code!' });
    }

    res.status(200).json({ message: 'User is verified successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
});

export default router;
