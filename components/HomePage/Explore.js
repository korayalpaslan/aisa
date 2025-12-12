import React from "react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="h-[40vh] relative">
      <Image
        fill
        alt="school"
        src="/images/panorama.jpg"
        className="object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-linear-to-b from-foreground/35 via-foreground/90 to-foreground flex-center text-4xl lg:text-5xl font-serif text-background">
        Explore more
      </div>
    </div>
  );
}
