import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7Mt87YP6PTd3H8fglQK4LSAOgQxIj90c",
  authDomain: "crwn-db-19ba5.firebaseapp.com",
  databaseURL: "https://crwn-db-19ba5.firebaseio.com",
  projectId: "crwn-db-19ba5",
  storageBucket: "",
  messagingSenderId: "679142487960",
  appId: "1:679142487960:web:796e3ba45330fbd20a9ded"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
