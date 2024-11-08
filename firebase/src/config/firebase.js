// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-roI6Vx2mCCFCe6KfMx8kj-jOs-SHtEw",
  authDomain: "fir-react-learn-b50ff.firebaseapp.com",
  projectId: "fir-react-learn-b50ff",
  storageBucket: "fir-react-learn-b50ff.firebasestorage.app",
  messagingSenderId: "965364954633",
  appId: "1:965364954633:web:720bf8af2a9c0d5a78ead8",
  measurementId: "G-WPZWHP0R4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = new getFirestore(app);
