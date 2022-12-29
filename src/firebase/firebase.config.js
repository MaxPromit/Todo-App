// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkEUknnmNZLHK7UPPxW6MHCZUQPBTwwjc",
  authDomain: "todo-cbb79.firebaseapp.com",
  projectId: "todo-cbb79",
  storageBucket: "todo-cbb79.appspot.com",
  messagingSenderId: "518713722675",
  appId: "1:518713722675:web:88ddee5ab91c8545162046"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);