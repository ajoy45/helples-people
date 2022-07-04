// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZP78Ay0zAU20AdcxGqV0waEMOuTcYfAA",
    authDomain: "helples-people.firebaseapp.com",
    projectId: "helples-people",
    storageBucket: "helples-people.appspot.com",
    messagingSenderId: "745443093474",
    appId: "1:745443093474:web:cb58e7bdfa6299a0bea7bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;