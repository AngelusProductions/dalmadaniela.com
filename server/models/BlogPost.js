const mongoose = require('mongoose');
const { v4 } = require('uuid');

const blogPostSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: {
      unique: true
    },
    default: v4()
  },
  name: String,
  introHtml: String,
  youtubeLink: String,
  bodyHtml: String,
  photoUrl: String,
  conclusionHtml: String,
  createdAt: {
    type: Date,
    default: new Date()
  }, 
  updatedAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
