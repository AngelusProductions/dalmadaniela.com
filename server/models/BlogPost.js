const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: {
      unique: true
    }
  },
  name: String,
  introHtml: String,
  youtubeLink: String,
  bodyHtml: String,
  photoUrl: String,
  conclusionHtml: String,
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
