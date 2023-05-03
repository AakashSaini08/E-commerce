import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz4q1NBZ3AZigoJitdHbypajO_6AO4Oz0",
    authDomain: "ecommercechicmic.firebaseapp.com",
    projectId: "ecommercechicmic",
    storageBucket: "ecommercechicmic.appspot.com",
    messagingSenderId: "410130761913",
    appId: "1:410130761913:web:7bdc15ee9b4605fa6b3368",
    measurementId: "G-LXN3Q0JPTJ"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;