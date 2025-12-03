"use client";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px", once: true });

  return (
    <div className="bg-foreground">
      <div
        ref={ref}
        className="py-40 space-y-5 max-w-4xl mx-auto text-background wrapper"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-semibold text-center text-3xl text-aisa-blue"
        >
          #WeAreAISA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-2xl lg:text-3xl font-serif text-center mb-10"
        >
          A warm, safe, and inspiring American education designed for young
          learners in the heart of Alanya
        </motion.p>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <button className="bg-aisa-yellow px-6 py-2 rounded-4xl font-semibold text-foreground text-sm hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer">
            Book a Campus Tour
          </button>
        </motion.div> */}
      </div>
    </div>
  );
}
