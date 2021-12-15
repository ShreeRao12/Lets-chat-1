function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
     window.location = "index.html";
    }
    
function send()
  {
    msg = document.getElementById("msg").value;
    firebase