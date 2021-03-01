import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuration details for firebase were here
const firebaseConfig = {
  apiKey: "AIzaSyAC9jkptAFl1GHyxfz4Efk00JEVPp_KN9I",
  authDomain: "productivity-pro-d6a0f.firebaseapp.com",
  projectId: "productivity-pro-d6a0f",
  storageBucket: "productivity-pro-d6a0f.appspot.com",
  messagingSenderId: "345487907256",
  appId: "1:345487907256:web:f477a5cce0c731f182174d",
};
//Initializing Firebase app
firebase.initializeApp(firebaseConfig);

// exporting authentication and db function for use in other places of app
export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
