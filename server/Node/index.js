const express = require('express')
const app = express();
const path = require("path");
const account = require("./models/admin");
const subscriber = require("./models/subscriber");
const event = require("./models/event");
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const config = require('./config');
const sgMail = require('@sendgrid/mail');
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
  jwt.verify(req.token, config.secret, (err, authorizedData) => {
    if(err){
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
        //If token is successfully verified, we can send the autorized data 
        res.json({
            message: 'Successful log in',
            error : null,
            authorizedData
        });
        console.log('SUCCESS: Connected to protected route');
    }
  })
})

app.get('/login', function (req, res) {
  let test = async function () {
    const exist = await account.getByUsernameAndGetPassword(req.headers.username);
    if (exist == null) {
      res.status(401).json({
        success: false,
        message: "Validation failed. Given username and password aren't matching."
      })
    } else {
      if (bcrypt.compareSync(req.headers.password, exist.password)) {
        jwt.sign({
          exist
        }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        }, (error, token) => {
          if (error) {
            res.json({
              error : error,
              data : null
            })
          }
          res.json({
            error:null,
            token : token
          })
        })
        
      }
      else {
        res.status(401).json({
          success: false,
          message: "Validation failed. Given username and password aren't matching."
        })
      }
    }
  }
  test();
})

app.post('/subscribe', function (req, res) {
  sgMail.setApiKey();
  const msg = {
    to: 'johnpatrick.cabia-an@student.passerellesnumeriques.org',
    from: req.body.email,
    subject: 'Sending with Twilio SendGrid is Fun',
    text: req.body.address,
    html: `<strong> ${req.body.username} From ${req.body.address}Joined The Revolution</strong>`,
  };

  let test = async function () {

    const exist = await subscriber.getByUsername(req.body.username);
    if (exist == null) {
      let data = {
        username: req.body.username,
        email: req.body.email,
        address: req.body.address
      }
      await subscriber.addSubscriber(data);
      let item = await subscriber.getLastSubscriber();
      res.send(item)

    } else {
      res.json({
        message: 'Username already exist!'
      })
    }
  }
  sgMail.send(msg);
  test();

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
