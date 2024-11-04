import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import registerRouter from './routes/register.js';
import verifyRouter from './routes/verify.js';
import loginRouter from './routes/login.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/verify', verifyRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
