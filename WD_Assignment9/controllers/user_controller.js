var express = require('express')
var app = express()
var router = express.Router()
var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
const { ObjectId } = require("mongoose").Types
var User = require('../models/user_model')
var User_service = require('../services/user_service')

function validateEmail(email) {
    
    const emailRegex = /^[^\s@]+@northeastern\.edu$/;
    if (emailRegex.test(email)) {
      return true; // Valid email address
    } else {
      return false; // Invalid email address
    }
}

function validatePassword(password) {
    // Password validation regular expression
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  
    // Check if password input matches the regex pattern
    if (passwordRegex.test(password)) {
      return true; // Valid password
    } else {
      return false; // Invalid password
    }
}

function validateFullname(fullname) {
    // Full name validation regular expression (allowing no spaces)
    const fullNameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    
    // Check if full name input matches the regex pattern
    if (fullNameRegex.test(fullname)) {
      return true; // Valid full name
    } else {
      return false; // Invalid full name
    }
  }

const loginuser = async(req, res) => {

    const email  = req.body.email;
    const password = req.body.password;
    console.log(email); console.log(password);
    if(!email || !password)
    {
        return res.status(400).send("Please enter required fields");
    }

    if(!validateEmail(email))
    {
        return res.status(400).json({message:'Email is Invalid must end with @northeastern.edu'})
    }
    
    if(!validatePassword(password))
    {
        return res.status(400).json({message:'Password must have minimum of 8 characters, and atleast one lowercase letter, one uppercase letter, one special character and one number'})
    }

    user = await User.findOne({ email }).lean().exec();

    if(user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {

            if(err) {
                return err;
            }
            else{
                if(email == user.email && !isMatch){
                    return res.status(401).send("invalid password");
                }
                else{
                    return res.status(200).json({'message':"Logging in done"});
                }
            }
        })
    }

    else{
        return res.status(400).send("User does not exist in Database");
    }

}

module.exports = {
    loginuser
}