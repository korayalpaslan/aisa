import NewsContainer from "@/components/NewsPage/NewsContainer";
import Hero from "@/components/shared/Hero";
import Intro from "@/components/shared/Intro";
import React from "react";
import { client } from "@/lib/sanity";

export const revalidate = 30;

async function getNews() {
  const query = `*[_type== 'news'] | order(_createdAt desc) {
  title,
  "currentSlug":slug.current,
  titleImage,
  description,
  newsDate
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function NewsPage() {
  const data = await getNews();

  return (
    <div className="min-h-screen flex flex-col">
      <Hero title="News" subtitle="" className="bg-purple-950" />
      <Intro
        title="Get the latest news from AISA"
        text="Stay informed with the latest news and events happening at AISA. From academic achievements to exciting extracurricular activities, our community is always buzzing with opportunities for students to grow and succeed."
      />
      <NewsContainer news={data} />
    </div>
  );
}
