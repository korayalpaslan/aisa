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
            Inclusion Philosophy
          </h2>
          <h4 className="font-serif text-2xl">
            Lorem ipsum dolor sit amet consectetur. Malesuada elit fringilla
            tellus etiam. Consequat felis faucibus metus turpis pretium. Risus
            ultrices enim netus et nisl vulputate risus turpis et.
          </h4>
          <div>
            <h2 className="font-semibold text-lg">Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              deleniti necessitatibus nostrum minus qui, illum, quidem neque
              numquam perspiciatis mollitia reiciendis nobis iste at, veniam quo
              odio quam cupiditate unde asperiores! Adipisci deleniti, nobis
              aliquid quia odit corrupti sint quidem.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              deleniti necessitatibus nostrum minus qui, illum, quidem neque
              numquam perspiciatis.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Values</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              deleniti necessitatibus nostrum minus qui.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
