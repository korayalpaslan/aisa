"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Club() {
  return (
    <div className="pb-20 lg:pb-40">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Clubs & Activities
          </h2>
          <h4 className="font-serif text-2xl">
            Discover Your Passions, Develop Your Leadership.
          </h4>
          <p>
            Transform your curiosity into a passion and your interests into
            projects. Our wide range of clubs ensures that every student can
            find a place to thrive. From Model United Nations (MUN) to the
            robotics club, from debate to coding, and from chess to
            environmental initiatives, our students have fun while acquiring new
            skills. We also foster their entrepreneurial and leadership spirit
            by encouraging them to start their own clubs.
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
                src="/images/student-life/club.jpg"
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
