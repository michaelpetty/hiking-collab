const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const subscriberCtl = require('./controllers/subscriberController')


//------------ content ------------///
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// ------------ Mongoose ---------//

mongoose.Promise = global.Promise;
var db = require('./models');

//-------------ROUTES--------------//
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname});
})
app.get('/admin', (req, res) => {
  res.sendFile('views/admin.html', {root: __dirname});
})


// get all subscribers
app.get('/api/subscribers', subscriberCtl.findAll);

// get one subscriber
app.get('/api/subscribers/:id', subscriberCtl.findOne);

// create new subscriber
app.post('/api/subscribers', subscriberCtl.createOne);


// delete subscriber
app.delete('/api/subscribers/:id', function (req, res) {
  db.Subscriber.findByIdAndRemove(req.params.id, (err, deletedSubscriber) => {
    if (err) return res.status(400).json({msg: 'Subscriber ID does not exist'});
    res.json(deletedSubscriber);
  });
});


//-------------- Start up the server --------//
app.listen(process.env.PORT || 4000, () => {console.log('Hiking app listening')});
