const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubscriberSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    news1: Boolean,
    news2: Boolean,
    news3: Boolean,
    
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema );
module.exports = Subscriber;

