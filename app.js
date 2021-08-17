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
     
      console.log("ok done")

    
      firebase.database().ref('student').push(data)
    
     
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
    .then((res) => {
      // Signed in
      // var user = userCredential.user;
      // console.log(res.user.uid)
      
      // ...
      console.log(res.user.uid)
      // firebase.database().ref(`student/${res.user.uid}`.once('value',(data)=>{
      //   console.log(data.value())
      // }
      // )
      // )
      localStorage.setItem("uid",res.user.uid)
window.location="profile.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}