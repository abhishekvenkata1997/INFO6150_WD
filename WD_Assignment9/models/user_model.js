var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')

var userSchema = mongoose.Schema({
    
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

var User = mongoose.model('User',userSchema);

module.exports = User;