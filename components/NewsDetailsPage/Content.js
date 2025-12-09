import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default function Content({ news }) {
  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="pb-10 text-xl md:text-2xl font-serif">
            {news.description}
          </h2>
          <div className="h-[350px] md:h-[500px] overflow-hidden">
            <Image
              src={urlFor(news.titleImage).width(1000).quality(80).url()}
              alt="Blog Detail Pic"
              width={1000}
              height={500}
              className="h-full object-cover rounded-md"
            />
          </div>

          <div className="prose prose-blue prose-base prose-h4:text-2xl prose-li:marker:text-gray-500 prose-a:text-red-600 py-10">
            <PortableText value={news.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
