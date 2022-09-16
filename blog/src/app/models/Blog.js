const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Blog = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 225 },
  slug: { type: String, slug: 'name', unique: true },
  video: { type: String, required: true },
  level: { type: String, maxLength: 225 }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Blog', Blog);
