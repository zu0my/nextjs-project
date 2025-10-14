declare const self: ServiceWorkerGlobalScope;

import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyAzM33DOKYAr_dscN6qzPioVRHCqv-0nek",
  authDomain: "fcm-test-6ee69.firebaseapp.com",
  projectId: "fcm-test-6ee69",
  storageBucket: "fcm-test-6ee69.firebasestorage.app",
  messagingSenderId: "152394046545",
  appId: "1:152394046545:web:f0ab36c45b474fc854ac70",
  measurementId: "G-YJVCD9C7KD",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  if (payload.data) {
    // 只处理 data-only 的消息   notification 消息自动处理
  }
});
