"use server";

import { type CreateUserType, CreateUserSchema } from "@/models/user";
import { createUser } from "@/services/create-user";

const createUserAction = async (user: CreateUserType) => {
  const validatedUser = CreateUserSchema.safeParse(user);

  if (!validatedUser.success) {
    return {
      success: false,
      error: {
        code: 100,
        message: validatedUser.error.issues[0].message,
      },
    };
  }

  try {
    const user = await createUser(validatedUser.data);

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: {
        code: 101,
        message: "Failed to create user",
      },
    };
  }
};

export default createUserAction;
