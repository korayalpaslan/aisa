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
import News from "@/components/HomePage/News";
import Explore from "@/components/HomePage/Explore";
import { client } from "@/lib/sanity";

export const revalidate = 30;

async function getNews() {
  const query = `*[_type== 'news'] | order(_createdAt desc)[0...4] {
  title,
  "currentSlug":slug.current,
  titleImage,
  description,
  newsDate
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const locale = await getLocale();
  const news = await getNews();
  return (
    <div className="w-full">
      <HeroMobile />
      <HeroDesktop />
      <Intro />
      <Academics />

      <Features />
      <Welcome />
      {/* <Testimonials /> */}
      {/* <Cta /> */}
      {/* <News news={news} /> */}
      {/* <Explore /> */}
    </div>
  );
}
