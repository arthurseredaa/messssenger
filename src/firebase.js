import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBX-QVNyf9jNR1u59L2mYgkGLoT56Tx6Pw",
  authDomain: "messssenger.firebaseapp.com",
  databaseURL: "https://messssenger.firebaseio.com",
  projectId: "messssenger",
  storageBucket: "messssenger.appspot.com",
  messagingSenderId: "207476937458",
  appId: "1:207476937458:web:c723a611dbfe89219f766b",
  measurementId: "G-M8CJDZE8V0",
});

export const db = firebaseApp.firestore();
