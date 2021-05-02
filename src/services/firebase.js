import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAiVYu5ca4oLqSRb8rb44SK8CIE39yTkZA",
    authDomain: "movie-app-a79c7.firebaseapp.com",
    projectId: "movie-app-a79c7",
    storageBucket: "movie-app-a79c7.appspot.com",
    messagingSenderId: "290407164072",
    appId: "1:290407164072:web:7a12a143c67f53a129ba9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase