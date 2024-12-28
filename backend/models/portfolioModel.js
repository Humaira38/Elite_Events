import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL of the image
  date: { type: Date, default: Date.now },
});

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);