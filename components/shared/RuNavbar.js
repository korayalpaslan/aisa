"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAnimate, motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import ScrollUp from "@/components/ScrollUp";
import Link from "next/link";

export default function RuNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const variants = {
    open: {
      width: "100%",
      height: "100vh",
      borderRadius: "0%",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    close: {
      width: 48,
      height: 48,
      borderBottomLeftRadius: "50%",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Clean up on unmount (important)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    animate(".box-1", { opacity: [0, 1] }, { duration: 0.1, ease: "easeOut" });
  }, [animate]);
  return (
    <div ref={scope}>
      <div className="box-1 opacity-0 px-6 flex justify-between items-center h-24 absolute w-full z-9998">
        <Link href="/">
          <Image
            src="/images/01.png"
            width={250}
            height={250}
            alt="logo"
            className={`object-cover w-[200px] lg:w-[250px] ${
              isOpen ? "hidden" : ""
            }`}
          />
        </Link>

        <div>
          <button
            className="h-12 w-12 rounded-full bg-white flex items-center justify-center cursor-pointer absolute z-30 right-6 top-6"
            onClick={() => setIsOpen((s) => !s)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <motion.div
        className={`absolute top-0 right-0 origin-top-right ${
          isOpen ? "z-20 bg-foreground opacity-100" : "-z-10 opacity-0"
        }`}
        variants={variants}
        animate={isOpen ? "open" : "close"}
        initial="close"
      >
        <div className="h-screen w-full flex flex-col">
          <div className="font-serif text-2xl lg:text-5xl text-background px-10 lg:p-20 flex-1 mt-10">
            <ul className="space-y-5 lg:space-y-10 pb-5 flex flex-col ">
              <Link
                href="/en/student-life"
                className=""
                onClick={() => setIsOpen(false)}
              >
                <span> Our School</span>
              </Link>
              <Link
                href="/en/student-life"
                className=""
                onClick={() => setIsOpen(false)}
              >
                <span> Admissions</span>
              </Link>
              <Link
                href="/en/student-life"
                className=""
                onClick={() => setIsOpen(false)}
              >
                <span>Student Life</span>
              </Link>
              <Link
                href="/en/student-life"
                className=""
                onClick={() => setIsOpen(false)}
              >
                <span> Latest News</span>
              </Link>
            </ul>
            <ul className="mt-5 py-10 border-t border-t-gray-500 flex flex-col space-y-5 lg:space-y-10">
              <Link
                href="/en/preschool"
                className="text-aisa-blue"
                onClick={() => setIsOpen(false)}
              >
                <span>Pre School</span>
              </Link>
              <Link
                href="/en/elementary-school"
                className="text-aisa-yellow"
                onClick={() => setIsOpen(false)}
              >
                <span> Elementary School</span>
              </Link>
              <Link
                href="/en/middle-school"
                className="text-aisa-red"
                onClick={() => setIsOpen(false)}
              >
                <span> Middle School</span>
              </Link>
              <Link
                href="/en/high-school"
                className="text-aisa-green"
                onClick={() => setIsOpen(false)}
              >
                <span> High School</span>
              </Link>
            </ul>
          </div>
        </div>
      </motion.div>
      <ScrollUp />
    </div>
  );
}
