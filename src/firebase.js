import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBKdGQObyydCLZJRY1_mszO98hHC5fI5_k",
    authDomain: "todoist-tut-5aef3.firebaseapp.com",
    databaseURL: "https://todoist-tut-5aef3.firebaseio.com",
    projectId: "todoist-tut-5aef3",
    storageBucket: "todoist-tut-5aef3.appspot.com",
    messagingSenderId: "891829576509",
    appId: "1:891829576509:web:36c95dcda11245dd4b9b54",
});

export { firebaseConfig as firebase};
