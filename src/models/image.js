import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  tags: {
    type: [{
      confidence: Number,
      tag: {
        en: String
      }
    }]
  }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
