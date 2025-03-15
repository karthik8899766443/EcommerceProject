// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-KKs2sQs2aXGo3T2blhAXVNbxDUItuU",
  authDomain: "login-auth-4b203.firebaseapp.com",
  projectId: "login-auth-4b203",
  storageBucket: "login-auth-4b203.firebasestorage.app",
  messagingSenderId: "839678582046",
  appId: "1:839678582046:web:49cb0fa8fd4d914dbdbd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;