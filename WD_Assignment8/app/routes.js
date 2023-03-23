const User = require('./models/users');
const path = require('path');
const bcrypt = require('bcrypt');



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
  

module.exports = function(app) {

    app.get('/', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    app.get("/user/getAll", async(req,res) => {
        
        try{
            const users = await User.find({}).select('-password').lean();
            res.json(users);
            console.log(users);
        } catch(err) {
            console.log(err);
            res.send(err);
        }
    });

    app.post("/user/create", async(req,res) => {
        try{
            
            const {fullname, Email, password} = req.body;

            // Confirm none are empty
            if (!fullname || !Email || !password ) {
                return res.status(400).json({ message: 'All fields are required' })
            }
            if(!validateEmail(Email))
            {
                return res.status(400).json({message:'Email is Invalid must end with @northeastern.edu'})
            }
            if(!validatePassword(password))
            {
                return res.status(400).json({message:'Password must have minimum of 8 characters, and atleast one lowercase letter, one uppercase letter, one special character and one number'})
            }
            const duplicate = await User.findOne({ Email }).lean().exec();
            if (duplicate) {
                return res.status(409).json({message: 'Duplicate user'})
            }

            //Hash password
            const hashedPwd = await bcrypt.hash(password, 10) //salt rounds
            const userObject = { fullname, Email, "password": hashedPwd, }

            const result = await User.create(userObject);
            console.log(result);
            res.send(result);
        } catch(err) {
            console.log(err);
        }
    });

    app.put("/user/edit/:email", async(req,res) => {
        try{

            const Email = req.params.email;
            var { fullname, password } = req.body;

            if (!Email || !fullname || !password ) {
                return res.status(400).json({ message: 'All fields are required' })
            }

            if(!validatePassword(password))
            {
                return res.status(400).json({message:'Password must have minimum of 8 characters, and atleast one lowercase letter, one uppercase letter, one special character and one number'})
            }
            //const result = await User.updateOne({email},{fullname, password}).lean().exec();
            const duplicate = await User.findOne({ Email }).lean().exec();
            //console.log(duplicate);
            if (duplicate) {

                //Hash password
                password = await bcrypt.hash(password, 10) //salt rounds
                //const userObject = { fullname, Email, "password": hashedPwd, }
                const result = await User.updateOne({ Email }, {fullname, password}).lean().exec();
                if(result){res.status(200).json({message:"The user has been updated"});}
                res.send(result);
            }
            else{
                return res.status(400).json({message:'There is no such email in the database'});
            }
        }
        catch(err){
            console.log(err);
        }
    });

    app.delete("/user/delete/:email",async(req,res) => {
        try{
            
            const Email = req.params.email;
            const check = await User.findOne({ Email }).lean().exec();
            if(check==null) {
                return res.status(400).json({ message: 'No such user email exists' });
            }
            else{
                User.deleteOne({Email}).exec();
                return res.status(200).json({message:"User has been deleted"});
            }
        }
        catch(err){
            console.log(err);
        }
    });


}; 