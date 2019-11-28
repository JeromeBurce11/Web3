const express = require('express')
const app = express();
const path = require("path");
const event = require("./models/event");
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

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

var id = "TheoPatrickBurceEpinAndIrish"
var dates;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentDate = function () {
  var d = new Date();
  var day = days[d.getDay()];
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();
 dates = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
}


var admin = "admin";
var pass = "Irish4Rsdf#";

app.post('/admin/login',(req, res)=>{
  console.log(req.body)
    if(
        req.body.data.username == admin &&
        req.body.data.password == pass
    ){
        res.status(200).send('proceed')
    }
})

// CREATE/ADD NEW EVENT
// app.post('/createEvent', upload.single('img'), (req, res) => {
//   console.log("Hellooooooo")
//   console.log(req.file)
//   d = req.body.data
//   currentDate()
//   let test = async function () {
//     let data = {
//       title: d.title,
//       dateCreated: dates,
//       dateEvent: d.dateevent,
//       address: d.address,
//       description: d.description,
//       createdBy: id
//     }

//     await event.addEvent(data);
//     let item = await event.getLastEvent();
//     // console.log(item)
//     res.status(200).send(item)
//   }
//   test();
// })

// app.post('/event/create'), (req, res) => {
//   console.log("Here  na us")
// }

app.use('/files', express.static(path.join(__dirname, 'uploads'))) 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        var filename = "uploads_"+Date.now(new Date()).toString() +"_"+ file.originalname
        cb(null, filename)
    }
})

var upload = multer({ storage: storage })
// function to save image   rl  to mongodb
let store = (filename) => {
    //your servername + filename
    var imgUrl = 'http://localhost:3000/files/uploads/' + filename; //save this to db  
}

app.post('/uploadSingle', upload.single('img'), (req, res, next) => {
  const img = req.file
  if (!img) {
      const error = new Error('Please select a file')
      error.httpStatusCode = 400
      return next(error)
  }
  else {
      store(img.filename)
      img.filename =  'http://localhost:3000/files/' + img.filename
      res.send(img )
  }
})

// DISPLAY ALL SAVED EVENTS.
app.get('/event/retrieveAll', (req, res) => {
  let test = async function () {
    let events = await event.retrieveEvents();
    // console.log("events : ", events)
    res.status(200).send(events);
  }
  test();
})

// DISPLAY ONLY THE DESIRED EVENT BY USING ITS TITLE
app.get('/event/retrievebytitle', (req, res) => {
  // console.log("title : " + req.headers.title)
  // console.log("nice one :" + req.headers)
  let test = async function () {
    let events = await event.getEvent(req.headers.title);
    console.log("events : ", events)
    res.status(200).send(events);
  }
  test();
})

// DELETE SPECIFIC EVENT BY USING ITS TITLE
app.delete('/event/delete:id', (req, res) => {
  // console.log(req.body)
  let test = async function () {
    await event.deleteEvent(req.params.id);
    let events = event.retrieveEvents();
    console.log("deleted")
    res.status(200).send(events);
  }
  test();
})


// UPDATE SPECIFIC EVENT
app.put('/event/update:id', (req, res) => {
  // console.log(req.params.id)
  currentDate()
  let test = async function () {
    var data = {
      title: req.body.data.title,
      dateCreated: dates,
      dateEvent: req.body.data.dateEvent,
      address: req.body.data.address,
      description: req.body.data.description,
      createdBy: id }
      
  await event.updateEvent(req.params.id, data.title,data.description,data.dateEvent,data.address);
    let events = await event.retrieveEvents();
    res.status(200).send(events);
    // console.log(events)
  }
  test();
})


// ADMIN

app.listen(port, function () {
  console.log("done!")
})
