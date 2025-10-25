"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimate } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".box-1",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "easeOut", delay: 2 }
    );
  }, [animate]);
  return (
    <div ref={scope}>
      <div className="box-1 opacity-0  px-10 flex justify-between items-center h-24">
        <Image
          src="/images/logo.png"
          width={300}
          height={300}
          alt="logo"
          className="object-cover w-[250px] lg:w-[300px]"
        />
        <div className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center">
          <Menu className="text-white" />
        </div>
      </div>
    </div>
  );
}
