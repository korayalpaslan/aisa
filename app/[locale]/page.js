import React from "react";
import { getLocale } from "next-intl/server";
import Intro from "@/components/HomePage/Intro";
import Academics from "@/components/HomePage/Academics";
import HeroMobile from "@/components/HomePage/HeroMobile";
import HeroDesktop from "@/components/HomePage/HeroDesktop";
import Welcome from "@/components/HomePage/Welcome";
import Features from "@/components/HomePage/Features";
import Testimonials from "@/components/HomePage/Testimonials";
import Cta from "@/components/HomePage/Cta";

export default async function Home() {
  const locale = await getLocale();
  return (
    <div className="w-full">
      <HeroMobile />
      <HeroDesktop />
      <Intro />
      <Academics />
      <Welcome />
      <Features />
      <Testimonials />
      <Cta />
    </div>
  );
}
