import "server-only";
import db from "@/lib/db";
import type { UserType, CreateUserType } from "@/models/user";

export const createUser = async (
  newUser: CreateUserType,
): Promise<UserType> => {
  try {
    const user = await db.query<UserType>(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [newUser.username, newUser.email, newUser.password_hash],
    );
    return user.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};
