import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDMDJa892lF7kvT7meR82qwKXKAsc63zuM",
    authDomain: "tik-tok-clone-af29f.firebaseapp.com",
    projectId: "tik-tok-clone-af29f",
    storageBucket: "tik-tok-clone-af29f.appspot.com",
    messagingSenderId: "566541721226",
    appId: "1:566541721226:web:13f0e67c7f628e34241773",
    measurementId: "G-MYP46TFBHY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;