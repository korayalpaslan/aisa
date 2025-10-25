"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Welcome() {
  return (
    <div className="py-20 lg:py-40">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Hear from Our Principal
          </h2>
          <h4 className="text-xl font-bold">
            We are a high achieving selective grammar school with academy
            status, educating girls between the ages of 11 and 16 and girls and
            boys in the Sixth Form.
          </h4>
          <p>
            Our school community encourages all students to reach their
            potential in a caring environment where wellbeing is the priority.
          </p>
          <p>
            Welcome We are a high achieving selective grammar school with
            academy status, educating girls between the ages of 11 and 16 and
            girls and boys in the Sixth Form. Our school community encourages
            all students to reach their potential in a caring environment where
            wellbeing is the priority. A broad, balanced and challenging
            curriculum allows for the development of key skills enabling our
            students to explore, question and build resilience.
          </p>
          <p className="text-sm font-semibold">Ali Veli, School Principal</p>
        </motion.div>
        <div className="w-full lg:w-1/2 relative">
          <div>
            <Image
              src="/images/welcome-2.jpg"
              width={350}
              height={350}
              className="object-cover rounded-md lg:hidden h-[350px] object-top w-full"
              alt="school_manager_pic "
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/welcome-1.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block"
                alt="school_manager_pic "
              />

              <Image
                src="/images/welcome-2.jpg"
                width={250}
                height={250}
                className="object-cover absolute bottom-0 h-[250px] object-top 
                -translate-x-1/2 translate-y-1/2 rounded-md hidden lg:block"
                alt="school_manager_pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
