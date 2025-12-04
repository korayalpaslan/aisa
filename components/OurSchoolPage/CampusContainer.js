"use client";
import React from "react";
import { motion } from "motion/react";
import Campus from "./Campus";

export default function CampusContainer() {
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
          Designed for Discovery, Built for Safety
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto text-center text-xl"
        >
          Nestled in the peaceful greenery of Alanya, our campus is a secure
          ecosystem designed specifically for young learners. More than just
          classrooms, we offer *sun-filled learning spaces, modern science labs,
          and safe, active playgrounds*. Every corner of AISA is crafted to
          inspire curiosity while providing the physical safety and warm
          atmosphere that makes our students feel right at home.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px 0px", once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Campus />
      </motion.div>
    </div>
  );
}
