import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
  apiKey: "AIzaSyAN-X9u7n7QnM8RLrVV4YnXq2MmVz6WNfw",

    authDomain: "em-issyoo.firebaseapp.com",

    projectId: "em-issyoo",

    storageBucket: "em-issyoo.appspot.com",

    messagingSenderId: "33480809995",

    appId: "1:33480809995:web:74df1e056f7638d0b5310e",

    measurementId: "G-C64NWHRT0Y"
  }
const firebaseApp = initializeApp(firebaseConfig);
getMessaging(firebaseApp);
