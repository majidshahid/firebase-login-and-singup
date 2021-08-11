function singup(){
    var name = document.getElementById("name");
    var age= document.getElementById("age");
    var email=document.getElementById("email");
    var password = document.getElementById("password");


    var data= {
        name:name.value,
        Age:age.value,
        email:email.value,
        password: password.value,
    }

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      console.log("ok done")

    
      firebase.database().ref('student').push(data)
      window.location = 'login.html'
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
   
}



var login =()=>{
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      window.location="profile.html"
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}