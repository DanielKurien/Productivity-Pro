import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuration details for firebase were here
const firebaseConfig = {
  apiKey: "AIzaSyDK9YHbG405YLSac9tldf-aA3Q3ip1M9Zg",
  authDomain: "productivity-pro-fe6bf.firebaseapp.com",
  projectId: "productivity-pro-fe6bf",
  storageBucket: "productivity-pro-fe6bf.appspot.com",
  messagingSenderId: "268736166728",
  appId: "1:268736166728:web:4db9c5e4903037e960517d",
};
//Initializing Firebase app
firebase.initializeApp(firebaseConfig);

// exporting authentication and db function for use in other places of app
export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
