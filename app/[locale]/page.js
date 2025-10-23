import React from "react";
import { getLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Academics from "@/components/Academics";

export default async function Home() {
  const locale = await getLocale();
  return (
    <div className="w-full">
      <Hero />
      <Intro />
      <Academics />
      <div className="h-screen bg-background"></div>
    </div>
  );
}
