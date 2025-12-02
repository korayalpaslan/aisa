"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Arts() {
  return (
    <div className="py-20 lg:pb-40">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">Arts & Culture</h2>
          <h4 className="font-serif text-2xl">
            Unleash Your Creativity, Color Your World.
          </h4>
          <p>
            Art is the universal language for our students to express
            themselves, unleash their imagination, and understand different
            cultures. Through our rich arts programs, from visual arts and music
            to drama and modern dance, we enable every student to discover the
            artist within. With exhibitions, concerts, and plays held throughout
            the year, our students proudly share their talents on stage and in
            galleries.
          </p>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-20 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px 0px", once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/student-life/arts.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md max-h-[400px]"
                alt="preschool_pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
