// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9BcdBvGdcfAz-ISVmUVN7GK8EzNZmCRU",
    authDomain: "dragon-news-d32b7.firebaseapp.com",
    projectId: "dragon-news-d32b7",
    storageBucket: "dragon-news-d32b7.appspot.com",
    messagingSenderId: "699065004965",
    appId: "1:699065004965:web:d2eb45f6782ad842f32e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;