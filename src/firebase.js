
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAIGwN_iYv0kA5R86ZHgZU4wSSJqumJ1-M",
  authDomain: "chat-c095d.firebaseapp.com",
  projectId: "chat-c095d",
  storageBucket: "chat-c095d.appspot.com",
  messagingSenderId: "845817040301",
  appId: "1:845817040301:web:b6200b782169606655e524"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();