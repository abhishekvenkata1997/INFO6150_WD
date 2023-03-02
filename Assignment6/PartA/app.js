$(document).ready(function () {

    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
      validateUsername();
    });
    $("#emailcheck").hide();
    let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
      validatePassword();
    });
   

    function containsSpecialChars(str) {
        const specialChars =
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }

    function validateUsername() {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
        $("#usercheck").show();
        usernameError = false;
        return false;
      } else if (usernameValue.length < 3 || usernameValue.length > 20) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 20");
        usernameError = false;
        return false;
      } else if (containsSpecialChars(usernameValue))
        {
          $('#usercheck').show();
          $('#usercheck').html("**username has special characters,must contain only letters and numbers");
          usernameError = false;
          return false;
        }

       else {
        usernameError = true;
        $("#usercheck").hide();
      }
    }

    function validateEmail() {
        let regex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        let emailValue = $("#email").val();
        if (emailValue.length == "") {
          $("#emailcheck").show();  
          $("#emailcheck").html("**email is empty");
          emailError = false;
          return false;
        } 
        else if(!regex.test(emailValue))
        {
          $("#emailcheck").show();
          $("#emailcheck").html("Email must end with @northeastern.edu and not contain special characters");
          emailError = false;
          return false;
        }
         else {
          emailError = true;
          $("#emailcheck").hide();
        }
      }
   
    // Validate Password

    function validatePassword() {

      let passwordValue = $("#password").val();
      let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,32}$/;
      let regex1 = /.*[a-z].*/;
      let regex2 = /.*[A-Z].*/;
      let regex3 = /.*[!@#$%^&*(),.?":{}|<>].*/;
      let regex4 = /.*[0-9].*/;

      if (passwordValue.length == "") {
        $("#passcheck").show();
        $("#passcheck").html("**password is empty");
        passwordError = false;
        return false;
      }
      else if ((passwordValue.length >0 &&passwordValue.length < 8 )|| passwordValue.length > 32) {
        $("#passcheck").show();
        $("#passcheck").html(
          "**length of your password must be between 8 and 32"
        );
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
      } 
      else if(!regex1.test(passwordValue))
      {
        $("#passcheck").show();
          $("#passcheck").html("Password must have atleast one small letter between a-z");
        passwordError = false;
        return false;
      }
      else if(!regex2.test(passwordValue))
      {
        $("#passcheck").show();
          $("#passcheck").html("Password must have atleast one capital letter between A-Z");
        passwordError = false;
        return false;
      }
      else if(!regex3.test(passwordValue))
      {
        $("#passcheck").show();
          $("#passcheck").html("Password must have atleast one special character");
        passwordError = false;
        return false;
      }
      else if(!regex4.test(passwordValue))
      {
        $("#passcheck").show();
          $("#passcheck").html("Password must have atleast one number ");
        passwordError = false;
        return false;
      }
      else if(!regex.test(passwordValue))
      {
        $("#passcheck").show();
        $("#passcheck").html("Password must have not have spaces or other illegal characters");
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
      }
      else {
        passwordError = true;
        $("#passcheck").hide();
      }
    }

    $("#submitbtn").click(function () {
        validateEmail();
        validatePassword();
        validateUsername();
        console.log(usernameError);
        console.log(passwordError);
        console.log(emailError);
        if (
          usernameError == true &&
          passwordError == true &&
          emailError == true
        ) {
          console.log("The fuck why you not working");
          window.location.href = "calc2.html";
          return false;

        } else {
          return false;
        }
      });
});