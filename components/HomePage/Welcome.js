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
            Hear from Our Founder
          </h2>
          <h4 className="text-xl font-bold">
            When you walk through our campus, you’ll feel something special — a
            sense of belonging. Here at AISA, we believe that education begins
            with connection. We learn better when we feel seen, heard, and cared
            for.
          </h4>
          <p>
            Every child who joins our community brings their own story, culture,
            and dreams. Our role as educators is to guide, encourage, and
            celebrate each of them as they discover who they are and who they
            can become.
          </p>
          <p>
            I invite you to visit us, meet our teachers, and feel the energy
            that makes this school so alive. At AISA, we’re more than a school —
            we’re a family that grows together.
          </p>
          <p className="text-sm font-semibold">Erdal Sayi, Founder</p>
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
            viewport={{ margin: "-100px 0px", once: true }}
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
