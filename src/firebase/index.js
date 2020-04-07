/**
 * Firebase Data
 * embryo comes with built in firebase database features
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCWxrH8DG1OoVBDuQVEBzASwl_oR8uqOyk",
  authDomain: "uscorporation-6fb59.firebaseapp.com",
  databaseURL: "https://uscorporation-6fb59.firebaseio.com",
  projectId: "uscorporation-6fb59",
  storageBucket: "uscorporation-6fb59.appspot.com",
  messagingSenderId: "1024939505514",
  appId: "1:1024939505514:web:79f56566f3145af691d713",
  measurementId: "G-BJP0WQWL3K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
