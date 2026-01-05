import "server-only";
import db from "@/lib/db";
import type { UserType } from "@/models/user";

export const login = async (email: string, password: string) => {
  const user = await db.query<UserType>(
    "SELECT * FROM users WHERE email = $1 AND password_hash = $2",
    [email, password],
  );
  return user.rows[0];
};
