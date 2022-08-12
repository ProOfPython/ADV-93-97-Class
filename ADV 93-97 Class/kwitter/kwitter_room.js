document.getElementById('helloThere').innerHTML = 'Welcome ' + (localStorage.getItem('Username')) + '!'
const firebaseConfig = {
    apiKey: "AIzaSyDOEIlfQoOID3iKMd46R0_BtAfHJttetpU",
    authDomain: "kwitter-d6cf5.firebaseapp.com",
    databaseURL: "https://kwitter-d6cf5-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6cf5",
    storageBucket: "kwitter-d6cf5.appspot.com",
    messagingSenderId: "620115658807",
    appId: "1:620115658807:web:c81cd2d7e3b986262617b2"
};
      firebase.initializeApp(firebaseConfig);

function logOut(){
    localStorage.removeItem('username')
    localStorage.removeItem('room_name')
    window.location.replace('kwitter.html')
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        roomNames = childKey
        row = '<div class = "roomName" id = "+roomNames+" onclick="redirectToRoomName(this.id) >#' + roomNames + '</div><hr>'  
        document.getElementById("output").innerHTML += row
      });
}

getData();

function addRoom(){
    newRoom = document.getElementById('roomInput').value
    firebase.database().ref("/").child(newRoom).update({ 
        purpose: "adding room" 
    });     
    localStorage.setItem('room_name', newRoom)
    window.location = 'kwitter_page.html'
}

function redirectToRoomName(roomname){
    localStorage.setItem('room_name', roomname)
    window.location = 'kwitter_page.html'
}