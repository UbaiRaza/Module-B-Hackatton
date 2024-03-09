// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcwSKsKc8SpTBBS8iefAn1RN6AHH7cnSU",
  authDomain: "hackarton-f952e.firebaseapp.com",
  projectId: "hackarton-f952e",
  storageBucket: "hackarton-f952e.appspot.com",
  messagingSenderId: "847758032545",
  appId: "1:847758032545:web:3fe0021237cc77af253ae0",
  measurementId: "G-P2X50DB24T"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
