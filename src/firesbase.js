// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj8inYV01Qx2VAX2eTOFRRmL9ikm_gTvs",
    authDomain: "performancecrm-f9a7a.firebaseapp.com",
    projectId: "performancecrm-f9a7a",
    storageBucket: "performancecrm-f9a7a.firebasestorage.app",
    messagingSenderId: "1025590305788",
    appId: "1:1025590305788:web:0f29675cab4ecb96b68879",
    measurementId: "G-4TW1FW9XZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);