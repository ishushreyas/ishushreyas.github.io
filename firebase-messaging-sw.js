importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
apiKey: "AIzaSyBVrRabMjHB6JSWoIxpgDp6Wnn1_eryP6g",
  authDomain: "chat-9a308.firebaseapp.com",
  projectId: "chat-9a308",
  storageBucket: "chat-9a308.appspot.com",
  messagingSenderId: "425014899154",
  appId: "1:425014899154:web:be7fb6b68d239647e2180b",
  measurementId: "G-334Y4TXNJD"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log( "[firebase-messaging-sw.js] Received background message ",  payload );
  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body, icon: payload.notification.image  };

  self.registration.showNotification(notificationTitle, notificationOptions);
}):
