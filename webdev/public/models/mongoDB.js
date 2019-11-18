var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://127.0.0.1/Accounts', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var ItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please Fille the Name"],
        unique: true
    },
    Address: {
        type: String,
        required: [true, "Put Address"]
    },
    Email: {
        type: String,
        required: [true, "Fill up Email"],
        
    }
    Password: {
        type: String,
        required: [true, "Fill up Password"],
        
    }
}, { visionkey: "_something" })

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;