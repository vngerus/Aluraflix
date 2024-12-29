import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPZ7sVAUhN7DNnKywgDcjMURmQEkwzpaI",
    authDomain: "aluraflix-5c2dd.firebaseapp.com",
    databaseURL: "https://aluraflix-5c2dd-default-rtdb.firebaseio.com/",
    projectId: "aluraflix-5c2dd",
    storageBucket: "aluraflix-5c2dd.appspot.com",
    messagingSenderId: "203553445226",
    appId: "1:203553445226:web:1413bb3254cae468eec113",
    measurementId: "G-GDJGGM95M2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
