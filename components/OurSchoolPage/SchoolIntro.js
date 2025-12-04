import Image from "next/image";
import React from "react";

export default function SchoolIntro() {
  return (
    <div className="py-20">
      <div className="wrapper flex flex-col lg:flex-row">
        <div className="lg:w-2/5 space-y-5">
          <h2 className="font-serif text-4xl lg:text-5xl">
            A Secure Start to <br></br>Global Future
          </h2>
          <p className="mb-4">
            We offer a secure start to a global future. For our youngest
            learners, AISA is a home away from home—a safe, nurturing
            environment where English is acquired naturally through play.
          </p>
          <p className="mb-4">
            As students advance to Primary School, we transition from gentle
            guidance to structured academic excellence. Our American curriculum
            uniquely balances creativity with discipline, ensuring mastery in
            core subjects like Mathematics and Science while fostering the
            critical thinking skills of tomorrow.
          </p>
          <p className="mb-4">
            We honor your child&apos;s cultural identity within a truly
            international community, providing the stability and rigorous
            foundation they need to thrive. Here, every child is seen, safe, and
            prepared for the world’s best universities.
          </p>
        </div>
        <div className="lg:w-3/5">
          <div className="lg:hidden">
            <Image
              src="/images/3.jpg"
              alt="our_school"
              width={300}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="hidden lg:flex flex-col space-y-5 justify-center">
            <div className="flex justify-center">
              <Image
                src="/images/10.jpg"
                alt="our_school"
                width={300}
                height={400}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-center space-x-5">
              <Image
                src="/images/3.jpg"
                alt="our_school"
                width={300}
                height={400}
                className="rounded-md h-[170px] w-auto object-cover"
              />
              <Image
                src="/images/high.jpg"
                alt="our_school"
                width={300}
                height={400}
                className="rounded-md h-[250px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
