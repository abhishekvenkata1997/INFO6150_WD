import React from "react";
import { useNavigate, } from 'react-router-dom'
import { useState } from "react";
import './login.css'

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


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    let [emailError, setemailError] = useState("");
    let [passwordError, setpasswordError] = useState("");
    let [MessageError, setMessageError] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isValid()) {login();}
        }
        catch (err) {
            console.log(err);
        }
    };

    let isValid = () => {

        if(!email && !password){
            setemailError("Email is blank");
            setpasswordError('password is blank');
            return true;
        }
        if(!email){
            setemailError("Email is blank");
            setpasswordError(" ");
            return true;
        }
        if(!password){
            setemailError("");
            setpasswordError("Password is blank");
            return true;
        }
        if(!validateEmail(email) && !validatePassword(password)){

            setemailError("Email must be valid and end with @northeastern.edu");
            setpasswordError("Password is not valid must have atleast one capital, one small, one special character and one number");
            return true;
        }
        if(!validateEmail(email))
        {
            setpasswordError("");
            setemailError("Email must be valid and end with @northeastern.edu");
            return true;
        }
        if(!validatePassword(password)){
            setpasswordError("Password is not valid must have atleast one capital, one small, one special character and one number");
            return true;
        }
        console.log("Email and Password look good");
        setemailError("");
        setpasswordError("");
        //setMessageError("User does not exist");
        return false;
         
    }
        //   if (emailError || nameError || passwordError) {
        //     console.log('clear errors')
        //     return false;
        //   }
      



    let login = () => {
        // const navigate = useNavigate();
        //   console.log(this.props)
        let check = { email: email, password: password }

        let get = fetch('http://localhost:8080/Login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(check)
        }).then(res => {
            get = res.json()
            if (res.statusText === "OK") {
                console.log('OK')
                navigate('/Home');

            }
            else if (res.status === 401) {
                    setpasswordError("Invalid Password");
                    setMessageError("");
            }
            else {
                console.log('Not ok')
                if(res.status===400)
                {
                    setpasswordError("");
                    setMessageError(" User doesn't exist")
                    return;
                }
                else
                {   
                   if(isValid()){
                    setMessageError(" ")
                    return true;
                   }
                }

            }

        })
    }

    return (

    <div id="form">
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1> Login Page</h1>
                <br></br>
                <input
                    type="email"
                    value={email}
                    placeholder="johndoe@northeastern.edu"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>{emailError ? <p>{emailError}</p> : null}</div>
                <br></br>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <div>{passwordError ? <p>{passwordError}</p> : null}</div>

                <br></br>
                <button type="submit">Submit</button>
                <div>{MessageError ? <p>{MessageError}</p> : null}</div>
                <br></br>


            </form>


        </div>

    </div>

    )
}




export default Login
