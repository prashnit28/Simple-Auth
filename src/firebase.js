// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCoXASKIEkudOMtUgYu_EKTztfESpm7sS8",
  authDomain: "loging-97306.firebaseapp.com",
  projectId: "loging-97306",
  storageBucket: "loging-97306.appspot.com",
  messagingSenderId: "206244996710",
  appId: "1:206244996710:web:e7173624b89a7d60e82fa7",
  measurementId: "G-W4XYD9EF12"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;