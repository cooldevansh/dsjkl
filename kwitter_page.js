const firebaseConfig = {
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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
   
  function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
    
  }

  function send(){
    msg=document.getElementById(msg).value;
    firebase.database().ref(room_name).push({
        name:user_name, messege:msg, like:0
    });
    document.getElementById("msg").value="";
    
  }