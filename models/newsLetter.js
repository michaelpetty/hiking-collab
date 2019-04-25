const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsLetterSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    news1: Boolean,
    news2: Boolean,
    news3: Boolean,
    
});

const newsLetter = mongoose.model('newsLetter', newsLetterSchema);
module.exports = newsLetter;

