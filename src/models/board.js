import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
});

const Board = mongoose.model('Board', boardSchema);

export default Board;
