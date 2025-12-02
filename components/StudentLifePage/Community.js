"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Community() {
  return (
    <div className="py-20 lg:pb-40 bg-foreground text-background">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Community & Service
          </h2>
          <h4 className="font-serif text-2xl">
            Be Part of the Change, Make Your Mark on the World.
          </h4>
          <p>
            We believe that true leadership begins with making a positive impact
            on the world. Our community and service programs aim to instill
            empathy, awareness, and a sense of global citizenship in our
            students. From local volunteer work to international social
            projects, our students learn to take responsibility for their
            communities and the world. These experiences not only provide the
            satisfaction of helping others but also give them a greater sense of
            purpose.
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
                src="/images/student-life/community.jpg"
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
