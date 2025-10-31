"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        layoutId="image"
        className="ring-2 ring-blue-500 ring-offset-2"
      >
        <Image
          src="https://placehold.co/200x300"
          alt="random"
          width={200}
          height={300}
          quality={100}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
