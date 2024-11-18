// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUeRHzy5wWwr-juxxGo41flVDG0hwe6lY",
  authDomain: "assignment-nine-71847.firebaseapp.com",
  projectId: "assignment-nine-71847",
  storageBucket: "assignment-nine-71847.firebasestorage.app",
  messagingSenderId: "434940715631",
  appId: "1:434940715631:web:aefb3f607246f3fea2e39a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
