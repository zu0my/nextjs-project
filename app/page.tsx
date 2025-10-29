"use client";

import Button from "@/app/ui/button";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <Button
        onClick={(e) => {
          console.info(e);
        }}
        onPress={(e) => {
          console.info(e);
        }}
      >
        Click me
      </Button>
    </div>
  );
}
