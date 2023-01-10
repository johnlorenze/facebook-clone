import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6k74I-Cby46vlJ0OEyaZekrX5IyPzJeM",
    authDomain: "facebook-clone-32258.firebaseapp.com",
    projectId: "facebook-clone-32258",
    storageBucket: "facebook-clone-32258.appspot.com",
    messagingSenderId: "635609458499",
    appId: "1:635609458499:web:8a8dc13ce085487947b1f6",
    measurementId: "G-0DSCKZ0RZ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;