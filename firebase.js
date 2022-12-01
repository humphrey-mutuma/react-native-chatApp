import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyALfvawJsFm1-7SmmqdvsYnsnQWqhy1uU0",
  authDomain: "chatapp-9e121.firebaseapp.com",
  projectId: "chatapp-9e121",
  storageBucket: "chatapp-9e121.appspot.com",
  messagingSenderId: "776878529341",
  appId: "1:776878529341:web:2f6bea403b3700b1af8354",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, auth };
