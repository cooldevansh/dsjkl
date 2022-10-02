
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCOorZLEVnb4jK18CYFa4SI2HicE9sVIP4",
      authDomain: "twitter-345a7.firebaseapp.com",
      databaseURL: "https://twitter-345a7-default-rtdb.firebaseio.com",
      projectId: "twitter-345a7",
      storageBucket: "twitter-345a7.appspot.com",
      messagingSenderId: "1053113413037",
      appId: "1:1053113413037:web:b469f182b580573d87c524"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function tele(){
      window.location="kwitter_page.html"; 
      room=document.getElementById("room_name").value;
      room_name=localStorage.setItem("room");
}

