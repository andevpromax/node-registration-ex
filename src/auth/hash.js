import crypto from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(crypto.scrypt);

const hashPassword = async (password) => {
  try {
    const salt = crypto.randomBytes(16).toString('hex');

    const derivedKey = await scrypt(password, salt, 64);

    return `${salt}:${derivedKey.toString('hex')}`;
  } catch (error) {
    throw new Error('Error hashing the password');
  }
};

const verifyPassword = async (storedHash, password) => {
  try {
    const [salt, key] = storedHash.split(':');

    const derivedKey = await scrypt(password, salt, 64);

    return key === derivedKey.toString('hex');
  } catch (error) {
    console.log(error.message);
  }
};

export { hashPassword, verifyPassword };
