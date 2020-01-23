import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firebase-firestore';


const config = {
  apiKey: "AIzaSyAvhPs1x56tXUTI39DFJqbvO5zXXOLhC9M",
  authDomain: "quiz-c24e4.firebaseapp.com",
  databaseURL: "https://quiz-c24e4.firebaseio.com",
  projectId: "quiz-c24e4",
  storageBucket: "quiz-c24e4.appspot.com",
  messagingSenderId: "1061419858594",
  appId: "1:1061419858594:web:bb76771b440f2bf80db5fb",
  measurementId: "G-HVNL1M11H9"
};

app.initializeApp( config );
let data= app.firestore();

let db;
export default db=data;
// export default app;
const auth = app.auth();
export const googleAuthProvider =new app.auth.GoogleAuthProvider();
// const db = app.database();
// export const storage = app.storage();
// export const functions = app.functions();

// *** Auth API ***

// doCreateUserWithEmailAndPassword = ( email, password ) =>
//   this.auth.createUserWithEmailAndPassword( email, password );

export const listenAuthState = ( observer ) => {
  return auth.onAuthStateChanged( observer );
};

export const doSignInWithEmailAndPassword = ( email, password ) => {
  return auth.signInWithEmailAndPassword( email, password );
};

export const doLogout = () => auth.signOut();

// ***  User API ***

// const user = uid => db.ref(`users/${uid}`);
//
// const users = () => db.ref('users');

// doPasswordReset = email => this.auth.sendPasswordResetEmail( email );
//
// doPasswordUpdate = password =>
//   this.auth.currentUser.updatePassword( password );

export {app};