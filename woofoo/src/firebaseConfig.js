// Import the fuctions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from 'firebase/database'
import { FORM_SAVED_STATE } from "./persistence/util";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE42b4Cr6ySOXi9G2ESn68WISilZ3OjZU",
  authDomain: "woofoo-practice-app.firebaseapp.com",
  projectId: "woofoo-practice-app",
  storageBucket: "woofoo-practice-app.appspot.com",
  messagingSenderId: "848027868310",
  appId: "1:848027868310:web:4a6e2a84460d9dc5bcf6b7",
  measurementId: "G-N2KCEWEJML",
  databaseURL: "https://woofoo-practice-app-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export const readSavedForms = async () => {
    const savedFormsReference = ref(getDatabase(), FORM_SAVED_STATE);
    const result = await get(child(savedFormsReference, '/savedForms'));
    return result.val();
}

export default firebaseConfig;
