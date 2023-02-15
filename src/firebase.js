import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
