const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit' , (e) => {
    e.preventDefault()


    checkInputs()
})


function checkInputs(){
    // get the values  from the inputs


  const  usernameValue = username.value.trim();
  const emailValue =  email.value.trim();
  const  passwordValue = password.value.trim();
  const  password2Value =password2.value.trim();

//This is for the Username Input

  if(usernameValue === ''){
    // show error
    // Add error class


    setErrorFor(username, 'Username cannot be blank')
  } else{
    // add success class


    setSuccessFor(username)
  }

// This is For the Email Input

  if(emailValue === ''){


    // Show the error
    // Add error class

        setErrorFor(email, 'Email cannot be blank')
    } else{
        setSuccessFor(email)
    }


// This is for the Password Input


    if (passwordValue === '' ){
        // show the error
        // Add the error class


        setErrorFor(password, 'Password must not be blank')
    } else{
        setSuccessFor(password)
    }


// This is for the password checker

    if (password2Value === '' ){
        // show the error
        // Add the error class


        setErrorFor(password2, 'Password must not be blank')
    } 

    else if (password2Value !== passwordValue ){

        setErrorFor(password2, 'Password does not match');
    } else{
        setSuccessFor(password2)
    }
    
}





function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')


    // add error message inside small
    small.innerText = message;


    // add error Class
    formControl.className = 'form-control error';
}


function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}




//This is for the Email Input


// if(emailValue === ''){


//     // Show the error
//     // Add error class

//     setErrorFor(email, 'Email cannot be blank')
// } else{
//     setSuccessFor(email)
// }