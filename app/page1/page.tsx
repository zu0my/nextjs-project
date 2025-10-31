"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Page1() {
  return (
    <div className="h-full flex items-start justify-center">
      <motion.div
        layoutId="image"
        className="ring-2 ring-red-500 ring-offset-2"
      >
        <Image
          src="https://placehold.co/500x300"
          alt="random"
          width={500}
          height={300}
          preload
          unoptimized
        />
      </motion.div>
    </div>
  );
}
