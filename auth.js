// Initialize Firebase (update with your own config)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
export function signupUser(email, password, role) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        localStorage.setItem("userRole", role);
        window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
}

// Login function
export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Retrieve role from your database or mock
        const role = localStorage.getItem("userRole") || "User";
        window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
}
