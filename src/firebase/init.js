import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyA304ghqHFaWw3TmGd6LgO-WPzcEJOIsZ8",
    authDomain: "vue-chat-cf120.firebaseapp.com",
    databaseURL: "https://vue-chat-cf120.firebaseio.com",
    projectId: "vue-chat-cf120",
    storageBucket: "vue-chat-cf120.appspot.com",
    messagingSenderId: "155167281792",
    appId: "1:155167281792:web:ab73e32f3ffba31e"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

export default firebase.firestore()