import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-foreground relative top-0 w-full flex flex-col justify-center items-center h-[50vh]">
      <h1 className="text-background text-4xl lg:text-5xl font-serif mb-2">
        Preschool
      </h1>
      <p className="mb-4 text-2xl text-center text-background font-serif">
        The Magical Beginning of Learning
      </p>
      <div className="flex items-center space-x-1 text-gray-400 text-sm">
        <Link href="/" className="font-bold">
          Main Page
        </Link>
        <ChevronRight />
        <span>Preschool</span>
      </div>
      <Image
        src="/pattern.png"
        width={320}
        height={320}
        className="absolute right-0 bottom-0 h-40 w-40 lg:h-80 lg:w-80"
        alt="logo_pattern"
      />
    </div>
  );
}
