const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wayfarer';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.log(err));

  module.exports = {
    City: require('./City'),
    Post: require('./Post'),
    User: require('./User')
  }