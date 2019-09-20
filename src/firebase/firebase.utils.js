import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7Mt87YP6PTd3H8fglQK4LSAOgQxIj90c",
  authDomain: "crwn-db-19ba5.firebaseapp.com",
  databaseURL: "https://crwn-db-19ba5.firebaseio.com",
  projectId: "crwn-db-19ba5",
  storageBucket: "crwn-db-19ba5.appspot.com",
  messagingSenderId: "679142487960",
  appId: "1:679142487960:web:796e3ba45330fbd20a9ded"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
