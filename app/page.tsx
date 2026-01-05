"use client";

import { Button } from "@/components/ui/button";
import createUserAction from "@/actions/create-user";

export default function Home() {
  const handleCreateUser = async () => {
    const response = await createUserAction({
      username: "test",
      email: "test@test.com",
      password_hash: "hello world",
    });

    console.log(response);
  };

  return (
    <div className="h-full">
      <Button onClick={handleCreateUser}>Create User</Button>
    </div>
  );
}
