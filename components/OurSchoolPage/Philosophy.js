"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <div className="py-20 lg:pb-40 bg-foreground text-background">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <div className="w-full lg:w-1/2 relative lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px 0px", once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/ourschool/philosophy.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md max-h-[300px] lg:max-h-[650px]"
                alt="preschool_pic"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Unlocking Every Student’s Potential
          </h2>
          <h4 className="font-serif text-xl">
            Entrusting your child to a school in a new country is a significant
            decision. At AISA, we create a secure environment where students
            feel free to learn, play, and grow without fear. From rigorous staff
            background checks to 24/7 campus security, we leave nothing to
            chance.
          </h4>
          <div>
            <h2 className="font-semibold text-lg">
              English Language Support (ELL)
            </h2>
            <p>
              Moving to an English-speaking school is a big step. Our intensive
              ELL program helps non-native speakers (from beginner to advanced)
              gain confidence and fluency rapidly, fully integrating them into
              mainstream classes.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Learning Support (SEN)</h2>
            <p>
              We provide tailored support for students with mild to moderate
              learning differences. Our specialists work closely with classroom
              teachers to create individual learning plans that foster
              independence and success.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">
              Challenge & Enrichment (Gifted Students)
            </h2>
            <p>
              Inclusion also means challenging the brightest minds. We offer
              enrichment activities and advanced projects for high-achieving
              students to ensure they remain engaged and intellectually
              stimulated.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
