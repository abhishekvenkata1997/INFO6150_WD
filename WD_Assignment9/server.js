const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const http = require('http')
const path = require('path')
const bcrypt = require('bcryptjs')
const express = require('express')

const cors = require('cors')

var db_connect = "mongodb://localhost:27017/user_list";
var user_route = require('./routes/user_routes');


mongoose.connect(db_connect);
mongoose.connection.on('connected',() => {
    console.log("Connected to the database");
});

mongoose.connection.on('error', err => {
    console.log('Mongo DB Error in connection: '+err);
})

var port = 8080;
var app = express();
app.use(cors())

app.use(bodyParser.json())
app.use(user_route);
app.use(express.json());


var server = http.createServer(app);

server.listen(port,() => {
    console.log("Server is starting on PORT:"+port);
})
