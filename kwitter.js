function addUser(){
    username=document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
    
}