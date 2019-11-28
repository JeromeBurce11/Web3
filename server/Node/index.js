const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const login = require('./admin/login');
const verify = require('./admin/verifyToken');
const createAdmin = require('./admin/createAdmin');
const subscribe = require('./subscriber/subscribe');
const create  = require('./events/create');
const retrieveAll = require('./events/retrieveAll');
const retrieveByTitle = require('./events/retrieveByTitle')
const remove = require('./events/delete');
const update = require('./events/update');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

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

app.get('/verify', checkToken, function (req, res) {
  console.log(req.headers)
  verify.verifyToken(req, res);
})
app.post('/admin', (req, res) => {
  createAdmin.create(req, res);
})
app.post('/admin/login', function (req, res) {
  console.log(req.body)
  login.login(req, res);
})

app.post('/subscribe', function (req, res) {
  subscribe.subscribe(req, res);
})

app.post('/event/create', (req, res) => {
  create.createEvent(req, res);
})
app.get('/event/retrieveAll', (req, res) => {
  retrieveAll.retrieve(req, res);
})
app.get('/event/retrievebytitle', (req, res) => {
  retrieveByTitle.retrieve(req, res);
})
app.delete('/event/delete', (req, res) => {
  remove.remove(req, res);
})
app.put('/event/update', (req, res) => {
  update.update(req, res);
})




app.listen(3000, function () {
  console.log("Connected to port : 3000!")
})
