import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where,updateDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseApp = initializeApp({
  // measurementId: "G-HZ0VP5QJY0"
  apiKey: "AIzaSyAX39RhAg2NO5XaB25Ys8D20NdEAUULMoE",
  authDomain: "formsignup-f56db.firebaseapp.com",
  databaseURL: "https://formsignup-f56db-default-rtdb.firebaseio.com",
  projectId: "formsignup-f56db",
  storageBucket: "formsignup-f56db.appspot.com",
  messagingSenderId: "488252136383",
  appId: "1:488252136383:web:62606393d85f446bb29f0a"
});

const auth = getAuth();
const db = getFirestore(firebaseApp);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);



export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    storage,
    storageRef,
   updateDoc,
   deleteDoc,
    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};