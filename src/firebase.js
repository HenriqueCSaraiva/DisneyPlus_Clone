import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA7SeUGclB00Mcn1-eM_meH36m7uumGNTc",
  authDomain: "disney-clone-4ed3a.firebaseapp.com",
  projectId: "disney-clone-4ed3a",
  storageBucket: "disney-clone-4ed3a.appspot.com",
  messagingSenderId: "367544342163",
  appId: "1:367544342163:web:d371f23acc48f90b241f66",
  measurementId: "G-927BDH334E"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;