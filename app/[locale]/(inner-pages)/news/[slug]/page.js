import React from "react";
import { client } from "@/lib/sanity";
import Hero from "@/components/shared/Hero";
import Content from "@/components/NewsDetailsPage/Content";

export const revalidate = 30;
async function getNewsDetail(slug) {
  const query = `*[_type=="news" && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    titleImage,
    description,
    content,
    title
}[0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  return (
    <div>
      <Hero
        title="NewsDetails"
        subtitle={news.title}
        className="bg-purple-950"
      />
      <Content news={news} />
    </div>
  );
}
