import * as firebase from 'firebase/app';


var firebaseConfig = {
  apiKey: "AIzaSyAdUjloZpTVlI95q5V8epzce8S92uSbNdM",
  authDomain: "baba-cf425.firebaseapp.com",
  databaseURL: "https://baba-cf425.firebaseio.com",
  projectId: "baba-cf425",
  storageBucket: "baba-cf425.appspot.com",
  messagingSenderId: "474013771567",
  appId: "1:474013771567:web:10da5b46bee6738c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;