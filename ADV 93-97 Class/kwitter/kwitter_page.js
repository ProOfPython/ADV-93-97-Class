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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      name = message_data['name']; 
      message = message_data['message']; 
      like = message_data['like']; 
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; l
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
      row = name_with_tag + message_with_tag +like_button + span_with_tag; 
      document.getElementById("output").innerHTML += row;
} });  }); }
getData();
function logOut(){
      localStorage.removeItem('Username')
      localStorage.removeItem('Room Name')
      window.location.replace('kwitter.html')
}
function send(){
      message = document.getElementById('message').value
      firebase.database().ref(room_name).push({
            name: user_name,
            msg:message,
            like:0
      })
      document.getElementById('message').value = ''
}
function updateLike(message_id){
      console.log('clicked on like button - ' + message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1
      console.log(updated_likes)
      firebase.database().ref(room_name).child(message.id).updateLike({
            like: updated_likes
      })
}
  