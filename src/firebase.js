// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvVc_JjgNFsOJqO1vZeyCJoHJEqtWDm18",
  authDomain: "hello-bc5f5.firebaseapp.com",
  projectId: "hello-bc5f5",
  storageBucket: "hello-bc5f5.appspot.com",
  messagingSenderId: "234454124621",
  appId: "1:234454124621:web:317aff03f784e69e347404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
