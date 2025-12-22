import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ThankyouPage() {
  return (
    <div className="h-screen flex flex-col space-y-5 justify-center items-center text-foreground  max-w-3xl mx-auto text-center px-6">
      <Image
        src="/images/02.png"
        width={250}
        height={250}
        alt="logo"
        className="object-cover w-[200px] lg:w-[250px]"
      />
      <h2 className="text-lg lg:text-2xl">
        {" "}
        Unfortunately, we couldn’t process your admission form at this time.
        Please try again later, or reach out to us at info@aisalanya.com and
        we’ll be happy to help.
      </h2>
      <Link href="/en/admission" className="underline">
        Try again
      </Link>
    </div>
  );
}
