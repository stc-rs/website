import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBxzHIAi4QHYE_b2z9Npz45FA6Gqvo_gUM",
    authDomain: "stc-rs.firebaseapp.com",
    projectId: "stc-rs",
    storageBucket: "stc-rs.appspot.com",
    messagingSenderId: "396574604098",
    appId: "1:396574604098:web:b0d421aa1fb42bcf19a6db",
    measurementId: "G-8757N7Y0S0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;