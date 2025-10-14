import { NextResponse } from "next/server";
import admin from "@/app/lib/firebase/admin"; // 导入我们创建的初始化服务
import { savedTokens } from "../save-token/route";

export const runtime = "nodejs";

export async function GET() {
  try {
    // 使用 firebase-admin SDK 发送消息
    console.log("Attempting to send FCM message with payload:", savedTokens);

    if (savedTokens.size === 0) {
      return NextResponse.json(
        { success: false, error: "No tokens found" },
        { status: 404 },
      );
    }

    const response = await admin.messaging().sendEachForMulticast({
      tokens: Array.from(savedTokens),
      notification: { title: "测试通知", body: "测试通知内容" },
      webpush: {
        notification: {
          title: "测试通知",
          body: "测试通知内容",
        },
        fcmOptions: {
          link: "https://www.imean.ai",
        },
      },
    });
    console.log("Successfully sent message:", response);

    // 返回成功响应
    return NextResponse.json({ success: true, messageId: response });
  } catch (error: any) {
    console.error("Error sending FCM message:", error);
    // 根据错误类型返回更具体的错误信息
    if (
      error.code === "messaging/invalid-registration-token" ||
      error.code === "messaging/registration-token-not-registered"
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid or unregistered device token." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
