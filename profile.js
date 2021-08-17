var uid =localStorage.getItem("uid");
var name = document.getElementById("name");
var age = document.getElementById('age');
var email = document.getElementById("email");
var password = document.getElementById("password");


firebase.database().ref(`student/${uid}`).once('value',(data)=>{
        console.log(data)
      }
      )
    