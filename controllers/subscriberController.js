const Subscriber = require('../models/subscriber')

module.exports = {
    findAll: async (req, res) => {
        try {
            let allSubscribers = await Subscriber.find()
            return res.json(allSubscribers)
        } catch(err) {
            return res.json({msg: 'Something went wrong. Please try again'})
        }
    },
    findOne: async (req, res) => {
        try {
            let foundSubscriber = await Subscriber.findById(req.params.id)
            return res.json(foundSubscriber)
        } catch(err) {
            return res.json({msg: 'subscriber ID does not exist'})
        }
    },
    createOne: async (req, res) => {
        try {
            let newSubscriber = await Subscriber.create(req.body)
            return res.json(newSubscriber)
        } catch(err) {
            return res.json({msg: 'Something went wrong. Please try again'})
        }
    },
    createMany: async (req, res) => {
        return await module.exports.createOne(req, res)
    },
}
// // get all subscribers
// app.get('/api/subscribers', function (req, res) {
//     // send all subscribers as JSON response
//     db.Subscriber.find(function(err, subscribers){
//       if (err) {
//         console.log("index error: " + err);
//         res.sendStatus(500);
//       }
//       res.json(subscribers);
//     });
//   });
  
//   // get one subscriber
//   app.get('/api/subscribers/:id', function (req, res) {
//     db.Subscriber.findById(req.params.id, (err, subscriber) => {
//       if (err) return res.status(400).json({msg: 'subscriber ID does not exist'});
//       res.json(subscriber);
//     });
//   });
  
//   // create new subscriber
//   app.post('/api/subscribers', function (req, res) {
//     db.Subscriber.create(req.body, (err, newSubscriber) => {
//       if (err) return res.status(500).json({msg: 'Something went wrong. Please try again'});
//       res.json(newSubscriber);
//     });
//   });
  
  
//   // delete subscriber
//   app.delete('/api/subscribers/:id', function (req, res) {
//     db.Subscriber.findByIdAndRemove(req.params.id, (err, deletedSubscriber) => {
//       if (err) return res.status(400).json({msg: 'Subscriber ID does not exist'});
//       res.json(deletedSubscriber);
//     });
//   });
  