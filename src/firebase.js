import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRlzoW2kG7VOEzdH8y2vIAYI0e_TmKhwI",
    authDomain: "twitter-clone-482d9.firebaseapp.com",
    projectId: "twitter-clone-482d9",
    storageBucket: "twitter-clone-482d9.appspot.com",
    messagingSenderId: "494702505891",
    appId: "1:494702505891:web:bfbbffefc8a21bf31ab416",
    measurementId: "G-X1S0SNBP7H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;