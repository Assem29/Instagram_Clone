import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDypMYhIWa46M4X-z-8cQRjVmI6AvHadW8",
  authDomain: "instagram-94298.firebaseapp.com",
  databaseURL: "https://instagram-94298-default-rtdb.firebaseio.com",
  projectId: "instagram-94298",
  storageBucket: "instagram-94298.appspot.com",
  messagingSenderId: "1022816398631",
  appId: "1:1022816398631:web:69e0a9795b690da1870d02",
  measurementId: "G-FF53H4BYFV"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)
export  {app,auth,db,storage};