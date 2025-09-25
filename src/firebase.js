import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkGJmIvQddRNgny8io8IjYH9GECpPYIug",
  authDomain: "rampurhat-app.firebaseapp.com",
  projectId: "rampurhat-app",
  storageBucket: "rampurhat-app.appspot.com",
  messagingSenderId: "923536190277",
  appId: "1:923536190277:web:9447aed6eb8846cc2b2c2c2c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
