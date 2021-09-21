import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUKKcKMIxFGlbmbyfpqjc4Q09-hI7bD9o",
    authDomain: "planlife-3ddd1.firebaseapp.com",
    projectId: "planlife-3ddd1",
    storageBucket: "planlife-3ddd1.appspot.com",
    messagingSenderId: "173513582153",
    appId: "1:173513582153:web:597f26a04e3ff3daaa0198",
    measurementId: "G-PGS085Y1Q3"
}

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;