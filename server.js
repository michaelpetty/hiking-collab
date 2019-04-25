const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//------------ content ------------///
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));



//-------------ROUTES--------------//
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname});
})



//-------------- Start up the server --------//
app.listen(process.env.PORT || 4000, () => {console.log('Hiking app listening')});
