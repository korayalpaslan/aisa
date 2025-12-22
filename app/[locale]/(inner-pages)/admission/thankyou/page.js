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
        Thank you for submitting the admission form for our school. We have
        successfully received your application. We appreciate your interest and
        will be in touch soon.
      </h2>
      <Link href="/" className="underline">
        Back to Main Page
      </Link>
    </div>
  );
}
