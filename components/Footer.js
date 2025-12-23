import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-foreground py-20 flex-center">
      <div className="px-10 flex flex-col lg:flex-row lg:justify-between w-full lg:space-x-20">
        <div className="flex flex-col items-center lg:items-start space-y-10 w-full lg:w-1/4  text-background">
          <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-start order-2 lg:order-1">
            Great futures start with happy beginnings
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
              Oba Mah. Alanya International School No:2 <br></br> Alanya /
              Antalya
            </p>
            <p className="text-sm">info@aisalanya.com</p>
            <p className="text-sm">+90 531 885 85 09</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col item-center lg:flex-row lg:justify-around text-background">
          <div className="mt-20 text-sm text-center lg:text-start">
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <div className="flex flex-col font-thin space-y-2 text-gray-400">
              <Link href="/en/our-school">OUR SCHOOL</Link>
              <Link href="/en/admission">ADMISSIONS</Link>
              <Link href="/en/student-life">STUDENT LIFE</Link>
              {/* <Link href="/en/news">LATEST NEWS</Link> */}
            </div>
          </div>
          <div className="mt-20 text-sm  text-center lg:text-start">
            <h4 className="font-semibold mb-4">ACADEMICS</h4>
            <div className="flex flex-col font-thin space-y-2 text-gray-400">
              <Link href="/en/preschool">PREP SCHOOL</Link>
              <Link href="/en/elementary-school">ELEMENTARY SCHOOL</Link>
              <Link href="/en/middle-school">MIDDLE SCHOOL</Link>
              <Link href="/en/high-school">HIGH SCHOOL</Link>
            </div>
          </div>
          <div className="mt-20 text-sm  text-center lg:text-start">
            <h4 className="font-semibold mb-4">SOCIAL MEDIA</h4>
            <div className="flex flex-col font-thin space-y-2 text-gray-400">
              <Link href="https://www.instagram.com/aisalanya/" target="_blank">
                INSTAGRAM
              </Link>
              <Link href="https://www.facebook.com/aisalanya" target="_blank">
                FACEBOOK
              </Link>
              <Link
                href="https://www.linkedin.com/company/aisalanya"
                target="_blank"
              >
                LINKEDIN
              </Link>
              <Link
                href="https://www.youtube.com/@alanyaInternationalschool"
                target="_blank"
              >
                YOUTUBE
              </Link>
              <Link href="https://t.me/aisalanyachannel" target="_blank">
                TELEGRAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
