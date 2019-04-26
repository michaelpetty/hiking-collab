const db = require('./models');

const newSubscriber = [
{   
    firstName: "Leanne",
    lastName: "Graham",
    email: "Sincere@april.biz",
    news1: true,
    news2: false,
    news3: true,

},
{  
    firstName:"Ervin",
    lastName: "Howell",
    email:"Shanna@melissa.tv",
    news1: false,
    news2: false,
    news3: true,
},
{  
    firstName:"Clementine",
    lastName: "Bauch",
    email:"Nathan@yesenia.net",
    news1: false,
    news2: false,
    news3: true,
},
{   
    firstName:"Patricia",
    lastName: "Lebsack",
    email:"Julianne.OConner@kory.org",
    news1: true,
    news2: true,
    news3: true,
},
];


// remove all records that match {} -- which means remove ALL records
//     db.Subscriber.deleteMany({}, function(err, subscribers){
//     if(err) {
//         console.log('Error occurred in remove', err);
//     } else {
//         console.log('removed all subscribers');

//         // create new records based on the array subscriber
//         db.Subscriber.create(subscriber, function(err, subscribers){
//         if (err) { return console.log('err', err); }
//         console.log("created", subscribers.length, "subscribers");
//         process.exit();
//         });
//     }
// });




db.Subscriber.create(newSubscriber, (err, savedSubscriber)=> {
    if (err) {
        return
            console.log(err);   
    }
    console.log(`saved new subscriber : ${savedSubscriber}`);
});