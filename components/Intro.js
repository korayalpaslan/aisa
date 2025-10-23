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
        className="py-40 space-y-5 max-w-4xl mx-auto text-background"
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
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-serif text-center"
        >
           AISA, American PreK-12 international school, offers international
          programs, empowering students to excel academically and gain admission
          to top universities in a welcoming, multicultural community.
        </motion.p>
      </div>
    </div>
  );
}
