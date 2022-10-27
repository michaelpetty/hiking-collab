const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hiking-collab';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));


    module.exports.Subscriber = require('./newsletter');
