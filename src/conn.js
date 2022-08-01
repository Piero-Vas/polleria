import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD7cEtdcVGqK71rjVEutpXTNlVhtiCskYg",
    authDomain: "polleria-efa93.firebaseapp.com",
    projectId: "polleria-efa93",
    storageBucket: "polleria-efa93.appspot.com",
    messagingSenderId: "843898444517",
    appId: "1:843898444517:web:e7b3eb97fd8fed7670520c"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider}