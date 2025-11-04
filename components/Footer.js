import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-foreground py-20 flex-center">
      <div className="px-10 flex flex-col lg:flex-row lg:justify-between w-full lg:space-x-20">
        <div className="flex flex-col items-center lg:items-start space-y-10 w-full lg:w-1/4  text-background">
          <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-start order-2 lg:order-1">
            Preparing for a remarkable future{" "}
          </h2>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/01.png"
              width={250}
              height={250}
              alt="logo"
              className="object-cover w-[200px] lg:w-[250px]"
            />
          </div>
          <div className="order-3 flex flex-col space-y-2 text-gray-400 text-center lg:text-start">
            <p className="text-sm">
              Oba Mah. Alanya International School No:2 Alanya / Antalya
            </p>
            <p className="text-sm">amerikankulturkolejialanya@gmail.com</p>
            <p className="text-sm">+90 531 885 85 09</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col item-center lg:flex-row lg:justify-around text-background">
          <div className="mt-20 text-sm text-center lg:text-start">
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="font-thin space-y-2 text-gray-400">
              <li>OUR SCHOOL</li>
              <li>ADMISSIONS</li>
              <li>STUDENT LIFE</li>
              <li>LATEST NEWS</li>
            </ul>
          </div>
          <div className="mt-20 text-sm  text-center lg:text-start">
            <h4 className="font-semibold mb-4">ACADEMICS</h4>
            <ul className="font-thin space-y-2 text-gray-400">
              <li>PREP SCHOOL</li>
              <li>PRIMARY SCHOOL</li>
              <li>MIDDLE SCHOOL</li>
              <li>HIGH SCHOOL</li>
            </ul>
          </div>
          <div className="mt-20 text-sm  text-center lg:text-start">
            <h4 className="font-semibold mb-4">SOCIAL MEDIA</h4>
            <ul className="font-thin space-y-2 text-gray-400">
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>TELEGRAM</li>
              <li>LINKEDIN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
