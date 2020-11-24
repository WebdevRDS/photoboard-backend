import mongoose from 'mongoose';

import Board from './board'
import Image from './image'

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Board, Image };

export { connectDb };

export default models;
