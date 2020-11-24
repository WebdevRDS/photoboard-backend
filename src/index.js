import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware - TODO:// Authorization token

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// * Routes * //

app.use('/api/images', routes.image);
app.use('/api/boards', routes.board);
app.use('/api/tag', routes.tag);

// * Start * //

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});