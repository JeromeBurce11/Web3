const express = require('express')
const app = express();
const event = require("../models/event");
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/accounts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected")
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const login = require('./admin/login');
const verify = require('./admin/verifyToken');

const checkToken = (req, res, next) => {
  console.log(req.headers)
  const header = req.headers['authorization'];

  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];

      req.token = token;
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}
app.get('/', checkToken, function (req, res) {
  verify.verifyToken(req, res);
})

app.get('/login', function (req, res) {
  login.login(req, res);
})

app.post('/subscribe', function (req, res) {

})

app.post('/addEvent', (req, res) => {
  let test = async function () {
    let data = {
      title: req.headers.title,
      dateCreated: req.headers.datecreated,
      dateEvent: req.headers.dateevent,
      address: req.headers.address,
      description: req.headers.description,
      createdBy: req.headers.createdby
    }
    await event.addEvent(data);
    let item = await event.getLastEvent();
    res.send(item)
  }
  test();
})

app.listen(3000, function () {
  console.log("Connected to port : 3000!")
})
