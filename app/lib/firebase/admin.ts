import * as admin from "firebase-admin";

console.log(admin.apps.length, "length");

if (!admin.apps.length) {
  console.log(admin.apps, "apps");
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

export default admin;
