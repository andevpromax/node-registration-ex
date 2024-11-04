import pool from '../db/db.js';
import { hashPassword, verifyPassword } from './hash.js';

const registerUser = async (
  email,
  password,
  verification_code,
  phoneNumber
) => {
  try {
    const password_hash = await hashPassword(password);

    const result = await pool.query(
      'INSERT INTO users (email, password_hash, verification_code, phone_number) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, password_hash, verification_code, phoneNumber]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('User registration failed: ', error.message);
  }
};

const verifyUser = async (email, verification_code) => {
  try {
    const result = await pool.query(
      'UPDATE users SET verified = TRUE WHERE email = $1 AND verification_code = $2 RETURNING *',
      [email, verification_code]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('User verification failed: ', error.message);
  }
};

const authenticateUser = async (email, password) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (result.rows.length === 0) return false;
    const user = result.rows[0];
    const isValid = await verifyPassword(user.password_hash, password);
    if (!isValid || !user.verified) return false;
    return true;
  } catch (error) {
    throw new Error('User authentication failed: ', error.message);
  }
};

export { registerUser, verifyUser, authenticateUser };
