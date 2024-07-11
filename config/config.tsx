import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAveVQ3UBZx2IYSro_nkjpSlA2Caq3IbWU",
    authDomain: "fa-prueba.firebaseapp.com",
    projectId: "fa-prueba",
    storageBucket: "fa-prueba.appspot.com",
    messagingSenderId: "452524729233",
    appId: "1:452524729233:web:8a5fbabe543d61bebe7030"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const auth= getAuth(app)

 