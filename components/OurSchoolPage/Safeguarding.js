"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function SafaGuarding() {
  return (
    <div className="pt-20 pb-20 lg:pb-60">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        <motion.div
          className="w-full lg:w-1/2 space-y-5 font-light order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px 0px", once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Safeguarding & Security{" "}
          </h2>
          <h4 className="font-serif text-xl">
            We believe that every child has a unique way of learning. Our
            mission is to identify those strengths and support the challenges.
            Whether your child needs extra support in English, has specific
            learning needs, or requires advanced academic challenges, our
            dedicated team ensures no student is left behind and no student is
            held back.
          </h4>
          <ul className="list-disc ml-5 space-y-6">
            <li>
              <strong className="font-bold">Safer Recruitment:</strong> Every
              teacher and staff member undergoes rigorous international
              background checks and police clearance before joining AISA. We
              hire only the most trusted professionals.
            </li>
            <li>
              <strong className="font-bold">Secure Campus:</strong> Our campus
              is monitored 24/7 by professional security personnel and CCTV
              systems. Entry is strictly controlled via ID cards and visitor
              registration.
            </li>
            <li>
              <strong className="font-bold">Zero-Tolerance Policy:</strong> We
              have a strict anti-bullying and anti-discrimination policy. We
              actively promote a culture of kindness, respect, and inclusion for
              every student.
            </li>
            <li>
              <strong className="font-bold">Digital Safety:</strong> We protect
              students online too. Our IT network filters inappropriate content,
              and we educate students on responsible internet usage.
            </li>
          </ul>
        </motion.div>
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-10 lg:mb-0">
          <div>
            <Image
              src="/images/ourschool/safeguarding-1.jpg"
              width={500}
              height={500}
              className="object-cover rounded-md lg:hidden h-[350px] object-top w-full"
              alt="preschool_pic"
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
                src="/images/ourschool/safeguarding-1.jpg"
                width={1000}
                height={1000}
                className="object-cover rounded-md hidden lg:block max-h-[600px]"
                alt="preschool_pic"
              />

              <Image
                src="/images/ourschool/safeguarding-2.jpg"
                width={500}
                height={500}
                className="object-cover absolute bottom-0 h-[250px] w-[250px] object-top 
                -translate-x-1/2 translate-y-1/2 rounded-md hidden lg:block"
                alt="preschool_pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
