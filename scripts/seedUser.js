import pool from '../src/db/db.js';

console.log('POOL', pool);
pool.query(
  `
		CREATE TABLE users (
			id SERIAL PRIMARY KEY,
			email VARCHAR(255) UNIQUE NOT NULL,
			password_hash TEXT NOT NULL,
			verified BOOLEAN DEFAULT FALSE,
			verification_code VARCHAR(255),
			phone_number VARCHAR(255),
		);
	`
);
