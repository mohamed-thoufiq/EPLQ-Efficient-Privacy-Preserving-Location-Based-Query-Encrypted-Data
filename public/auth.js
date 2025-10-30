
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyAz9ugWe7qjxTqYs2zB8QpdcddKJ5YbLv4",
  authDomain: "epql-project.firebaseapp.com",
  projectId: "epql-project",
  storageBucket: "epql-project.appspot.com", 
  messagingSenderId: "325402672959",
  appId: "1:325402672959:web:9526d3665f64fbb9539d8a",
  measurementId: "G-TZ221RRSC4",
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// SIGNUP FUNCTION (with Firestore)

export async function signupUser(email, password, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    
    await setDoc(doc(db, "users", user.uid), {
      email,
      role,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Signup failed:", error);
    alert("Signup failed: " + error.message);
  }
}


// LOGIN FUNCTION (reads role from Firestore)

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;


    const userDoc = await getDoc(doc(db, "users", user.uid));
    let role = "User";

    if (userDoc.exists()) {
      role = userDoc.data().role;
    }

    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + error.message);
  }
}
