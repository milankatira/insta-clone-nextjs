import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCvl_uye4ovw37M1DSkJG6yhv3D3qJoYUU",
  authDomain: "rich-city-286009.firebaseapp.com",
  projectId: "rich-city-286009",
  storageBucket: "rich-city-286009.appspot.com",
  messagingSenderId: "225954257583",
  appId: "1:225954257583:web:c979d53af204678e1d125a",
  measurementId: "G-NQ9NJDBTL0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db=getFirestore();

const storage=getStorage();

export {app,db,storage};