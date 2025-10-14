"use client";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";
import app from "@/app/lib/firebase";

export default function Home() {
  const [notification, setNotification] = useState<{
    title: string;
    body: string;
  } | null>(null);

  const requestToken = async () => {
    const token = await getToken(getMessaging(app), {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_KEY,
    });
    console.log("token: ", token);

    await fetch("/api/save-token", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
  };

  const sendMessage = async () => {
    await fetch("/api/message", {
      method: "GET",
    });
  };

  useEffect(() => {
    const unsubscribe = onMessage(getMessaging(app), (payload) => {
      if (payload.notification) {
        if (payload.notification.title && payload.notification.body) {
          setNotification({
            title: payload.notification.title,
            body: payload.notification.body,
          });
        }

        alert(document.hidden);
        if (!document.hidden) {
          new Notification(
            `${payload.notification.title} hello`,
            payload.notification,
          );
        } else {
          alert("网站有更新");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative h-full">
      <button
        type="button"
        onClick={requestToken}
        className="border border-gray-300 rounded-md px-4 py-2 transition hover:bg-gray-300"
      >
        request token
      </button>
      <button
        type="button"
        onClick={sendMessage}
        className="border border-gray-300 rounded-md px-4 py-2 transition hover:bg-gray-300"
      >
        send message
      </button>
      {notification && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">{notification.title}</h3>
          <p className="text-sm text-gray-500">{notification.body}</p>
        </div>
      )}
    </div>
  );
}
