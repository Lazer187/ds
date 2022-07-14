// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtr1UWx1k190IcpMrAvd5A33HhJcQDObc",
    authDomain: "kwitter-m.firebaseapp.com",
    databaseURL: "https://kwitter-m-default-rtdb.firebaseio.com",
    projectId: "kwitter-m",
    storageBucket: "kwitter-m.appspot.com",
    messagingSenderId: "813603274759",
    appId: "1:813603274759:web:97b10b77e802ab71582aa2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
     msg= document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
