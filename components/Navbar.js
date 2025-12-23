"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAnimate, motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import ScrollUp from "./ScrollUp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // HIDE loading overlay when route changes finish
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  function navigateAfterClose(href) {
    setIsOpen(false); // start closing animation
    setIsLoading(true); // show loading overlay immediately

    setTimeout(() => {
      router.push(href);
    }, 220); // match your menu close duration
  }

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
    animate(
      ".box-1",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "easeOut", delay: 2 }
    );
  }, [animate]);
  return (
    <div ref={scope}>
      <div className="box-1 opacity-0 px-6 flex justify-between items-center h-24 relative">
        <Image
          src="/images/02.png"
          width={250}
          height={250}
          alt="logo"
          className="object-cover w-[200px] lg:w-[250px]"
        />

        <div>
          <button
            className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center cursor-pointer absolute z-30 right-6 top-6"
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
                  <X className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <motion.div
        className={`absolute top-0 right-0 origin-top-right overflow-hidden ${
          isOpen ? "z-20 bg-foreground opacity-100" : "-z-10 opacity-0"
        }`}
        variants={variants}
        animate={isOpen ? "open" : "close"}
        initial="close"
      >
        <div className="h-screen w-full flex flex-col">
          <div className="font-serif text-2xl lg:text-5xl text-background px-10 lg:p-20 flex-1 mt-10">
            <ul className="space-y-5 lg:space-y-10 pb-5 flex flex-col ">
              <li
                onClick={() => navigateAfterClose("/en/our-school")}
                className="cursor-pointer"
              >
                <span> Our School</span>
              </li>
              <li
                onClick={() => navigateAfterClose("/en/admission")}
                className="cursor-pointer"
              >
                <span> Admissions</span>
              </li>
              <li
                onClick={() => navigateAfterClose("/en/student-life")}
                className="cursor-pointer"
              >
                <span>Student Life</span>
              </li>
              <li
                onClick={() => navigateAfterClose("/en/news")}
                className="cursor-pointer"
              >
                <span> Latest News</span>
              </li>
            </ul>
            <ul className="mt-5 py-10 border-t border-t-gray-500 flex flex-col space-y-5 lg:space-y-10">
              <li
                className="text-aisa-blue cursor-pointer"
                onClick={() => navigateAfterClose("/en/preschool")}
              >
                <span>Pre School</span>
              </li>
              <li
                className="text-aisa-yellow cursor-pointer"
                onClick={() => navigateAfterClose("/en/elementary-school")}
              >
                <span> Elementary School</span>
              </li>
              <li
                className="text-aisa-red cursor-pointer"
                onClick={() => navigateAfterClose("/en/middle-school")}
              >
                <span> Middle School</span>
              </li>
              <li
                className="text-aisa-green cursor-pointer"
                onClick={() => navigateAfterClose("/en/high-school")}
              >
                <span> High School</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <ScrollUp />
      {isLoading && (
        <div className="fixed inset-0 bg-foreground text-background flex items-center justify-center z-9999">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl animate-pulse"
          >
            <Image
              src="/images/01.png"
              width={250}
              height={250}
              alt="logo"
              className="object-cover w-[200px] lg:w-[250px]"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
