
const firebaseConfig = {
    apiKey: "AIzaSyCTk-v7Q1EgHuDtwGtVgXtut87gF-qClss",
    authDomain: "practice-57e75.firebaseapp.com",
    databaseURL: "https://practice-57e75-default-rtdb.firebaseio.com",
    projectId: "practice-57e75",
    storageBucket: "practice-57e75.appspot.com",
    messagingSenderId: "193771382357",
    appId: "1:193771382357:web:86b804be51ee9cc06656dc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}