import firebase from "./firebase"
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth';

const firebaseApp = initializeApp({
     apiKey: "AIzaSyDM8PzJRBvYdFWOLLL55g--I2rjNY5FaOA",
     authDomain: "disneyplus-clone-2eb8a.firebaseapp.com",
     projectId: "disneyplus-clone-2eb8a",
     storageBucket: "disneyplus-clone-2eb8a.appspot.com",
     messagingSenderId: "336199444576",
     appId: "1:336199444576:web:b8abf412bd81ebcb88fb05",
     measurementId: "G-5J7XW409WE"
});

const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();




export function signUp(){
     return signInWithPopup(auth, GoogleAuthProvider)
}
// const storage = firebase.storage();

export { auth, provider, signInWithPopup};
 
export default db;