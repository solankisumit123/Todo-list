var mongoose = require('mongoose');

var task = new mongoose.Schema({
    name: {
        type: String,
    },
    task: {
        type: String
    },
    discription: {
        type: String
    },
   
})  

module.exports = mongoose.model('task', task)
