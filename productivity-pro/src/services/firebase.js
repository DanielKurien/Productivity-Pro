import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuration details for firebase were here

//Initializing Firebase app
firebase.initializeApp(firebaseConfig);

// exporting authentication and db function for use in other places of app
export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
