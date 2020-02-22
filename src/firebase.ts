import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCJUsIuhBSXmAoYGJTpUPbNpO1ZHzW6Q8Y",
  authDomain: "uotian-y.firebaseapp.com",
  databaseURL: "https://uotian-y.firebaseio.com",
  projectId: "uotian-y",
  storageBucket: "uotian-y.appspot.com",
  messagingSenderId: "965104529193",
  appId: "1:965104529193:web:1519e90b8149ac47a0d138",
  measurementId: "G-707TX8WHMQ"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.auth();
export default firebase;
