import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALfvawJsFm1-7SmmqdvsYnsnQWqhy1uU0",
  authDomain: "chatapp-9e121.firebaseapp.com",
  projectId: "chatapp-9e121",
  storageBucket: "chatapp-9e121.appspot.com",
  messagingSenderId: "776878529341",
  appId: "1:776878529341:web:2f6bea403b3700b1af8354",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
