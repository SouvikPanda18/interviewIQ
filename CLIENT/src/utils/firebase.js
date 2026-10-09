import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewsp-ae6da.firebaseapp.com",
  projectId: "interviewsp-ae6da",
  storageBucket: "interviewsp-ae6da.firebasestorage.app",
  messagingSenderId: "828169674106",
  appId: "1:828169674106:web:b87d817b0660ce1275cac3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };