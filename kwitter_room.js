//Add Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqWpDTBG36Dl2-CUOfBgjn9YDQ5Ya7_48",
  authDomain: "letschat-b3606.firebaseapp.com",
  databaseURL: "https://letschat-b3606-default-rtdb.firebaseio.com",
  projectId: "letschat-b3606",
  storageBucket: "letschat-b3606.appspot.com",
  messagingSenderId: "118522739117",
  appId: "1:118522739117:web:57b6c989a5784be0570924",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);
   
     window.location = "kwitter_page.html";

     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr></hr>";
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log("name")
  localStorage.setItem("room_name", name)
   window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
   window.location = "index.html";
  }
  