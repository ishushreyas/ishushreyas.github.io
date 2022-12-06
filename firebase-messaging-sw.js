importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBVrRabMjHB6JSWoIxpgDp6Wnn1_eryP6g",
  authDomain: "chat-9a308.firebaseapp.com",
  projectId: "chat-9a308",
  storageBucket: "chat-9a308.appspot.com",
  messagingSenderId: "425014899154",
  appId: "1:425014899154:web:be7fb6b68d239647e2180b",
  measurementId: "G-334Y4TXNJD"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
