import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTj4oEGmUUuUQRQ5eKfZPRNByLYlMZWco",
  authDomain: "basic-crud-9a083.firebaseapp.com",
  projectId: "basic-crud-9a083",
  storageBucket: "basic-crud-9a083.appspot.com",
  messagingSenderId: "534160317711",
  appId: "1:534160317711:web:3d64d1baf53d185141b27a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
