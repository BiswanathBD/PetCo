// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOFxcg91onNYvps0H0xNMpFIG8xq5LHY",
  authDomain: "petco-by-biswanath.firebaseapp.com",
  projectId: "petco-by-biswanath",
  storageBucket: "petco-by-biswanath.firebasestorage.app",
  messagingSenderId: "1063644689297",
  appId: "1:1063644689297:web:72069c4cb4cf421a0fa030",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
