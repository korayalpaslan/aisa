import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <div className="bg-foreground py-20 text-background">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:justify-between items- lg:items-start space-y-10 lg:space-y-0">
          <div className="space-y-5">
            <h1 className="font-serif text-4xl lg:text-5xl text-center lg:text-left text-background">
              Begin your journey at AISA today
            </h1>
            <p className="text-xl text-center lg:text-left lg:w-1/2">
              Take the first step toward an international education that
              inspires curiosity, confidence, and connection.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              href="/en/admission"
              className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground  hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer"
            >
              Apply For Admission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
