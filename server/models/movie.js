var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = require('./comment').schema;

var MovieSchema = new Schema({
  title: { type: String, required: true },
  releaseDate: Date,
  comments: [CommentSchema],
  director: { type: String },
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
