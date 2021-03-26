import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_6zWoUip34trd53U19XBoMRdyXJ_4GPs",
    authDomain: "college-quora-b0be4.firebaseapp.com",
    projectId: "college-quora-b0be4",
    storageBucket: "college-quora-b0be4.appspot.com",
    messagingSenderId: "971540012096",
    appId: "1:971540012096:web:6159cab78bbfe6761813a5",
    measurementId: "G-PZGP98ZYJ9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

const db=firebaseApp.firestore();

export {auth,provider};
export default db;