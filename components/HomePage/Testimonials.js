"use client";
import React from "react";
import { motion } from "motion/react";
import Interviews from "./Interviews";

export default function Testimonials() {
  return (
    <div className="pt-20 pb-0 bg-foreground">
      <div className="wrapper text-background">
        <motion.h1
          className="font-serif text-4xl lg:text-5xl text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Experience a sense of belonging
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
           AISA, American PreK-12 international school, offers international
          programs, empowering students to excel academically and gain admission
          to top universities in a welcoming, multicultural community.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px 0px", once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Interviews />
      </motion.div>
    </div>
  );
}
