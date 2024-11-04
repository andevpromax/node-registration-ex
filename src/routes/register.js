import express from 'express';
import crypto from 'crypto';
import { registerUser } from '../auth/auth.js';
import sendVerificationSms from '../sms/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password, phoneNumber } = req.body;

  const verification_code = crypto.randomBytes(16).toString('hex');

  try {
    await registerUser(email, password, verification_code, phoneNumber);

    await sendVerificationSms(phoneNumber, verification_code);

    res.status(200).json({
      message:
        'Registration successful. Please check your mobile phone for verification.',
    });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed.' });
  }
});

export default router;
