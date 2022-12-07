import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK7xalj4EvD8sxGSYe0jD9k4qpiujDUg4",
  authDomain: "pokedex-97387.firebaseapp.com",
  projectId: "pokedex-97387",
  storageBucket: "pokedex-97387.appspot.com",
  messagingSenderId: "204842614010",
  appId: "1:204842614010:web:0bf4d6574c54d8d42edd43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;