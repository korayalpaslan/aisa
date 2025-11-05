"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ScrollUp = () => {
  const [showArrow, setshowArrow] = useState(false);
  console.log(`Arrow ${showArrow}`);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowArrow(true);
      } else {
        setshowArrow(false);
      }
    });
  }, [showArrow]);
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {showArrow && (
        <div className="flex flex-col space-y-4">
          {/* <div className="fixed z-50 h-10 w-10 bottom-20 right-32 cursor-pointer text-slate-50 bg-red-500 rounded-full flex flex-col justify-center items-center">
            <Link href="/">
              <Image
                src="/images/whatsapp.png"
                height={40}
                width={40}
                alt="Whatsapp"
              />
            </Link>
          </div> */}
          <div className="fixed z-50 h-10 w-10 bottom-5 right-10 cursor-pointer text-slate-50 bg-aisa-blue rounded-full flex flex-col justify-center items-center">
            <ArrowUp onClick={scrollToTopHandler} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
