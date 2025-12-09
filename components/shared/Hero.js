import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function Hero({ title, subtitle, className, light }) {
  return (
    <div
      className={clsx(
        "relative top-0 w-full flex flex-col justify-center items-center h-[70vh] lg:h-[50vh]",
        className
      )}
    >
      {title !== "NewsDetails" && (
        <h1
          className={`text-4xl lg:text-5xl font-serif mb-2 ${
            light ? "text-foreground" : "text-background"
          }`}
        >
          {title}
        </h1>
      )}
      <p
        className={`mb-4 text-center font-serif px-6 ${
          light ? "text-foreground" : "text-background"
        } ${title === "NewsDetails" ? "text-4xl" : "text-2xl"}`}
      >
        {subtitle}
      </p>
      <div
        className={`flex items-center space-x-1 text-sm ${
          light ? "text-foreground" : "text-background"
        }`}
      >
        <Link href="/" className="font-bold">
          Main Page
        </Link>
        <ChevronRight />
        {title === "NewsDetails" ? (
          <Link href="/en/news" className="font-bold">
            Back to News
          </Link>
        ) : (
          <span> {title}</span>
        )}
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
