var mongoose = require('mongoose');

module.exports = mongoose.model("Users",{
    
    fullname:
    {
        type: String,
        required: true
    },
    Email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    }
});
