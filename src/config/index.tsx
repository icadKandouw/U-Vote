// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiXRG1DgGWyu7BiDiVo1LMPPB2q5KXBfQ",
  authDomain: "fir-233ed.firebaseapp.com",
  projectId: "fir-233ed",
  storageBucket: "fir-233ed.appspot.com",
  messagingSenderId: "648280021513",
  appId: "1:648280021513:web:9c1097fa18f3f785ddf6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

export default app;