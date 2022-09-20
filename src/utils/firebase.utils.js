
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAltmRVl-ESsw5_wNmwjTo_dyusJiziJ4k",
  authDomain: "crown-clothing-fca83.firebaseapp.com",
  projectId: "crown-clothing-fca83",
  storageBucket: "crown-clothing-fca83.appspot.com",
  messagingSenderId: "72887183471",
  appId: "1:72887183471:web:3484d17cd545d0661a059a"
};


export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)



