import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { localizedDate } from "@/lib/localizedDate";

export default function NewsContainer({ news }) {
  return (
    <div className="pb-20 lg:pb-40">
      <div className="wrapper flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-40">
        {" "}
        <ul className="flex flex-col md:grid md:grid-cols-3 gap-10">
          {news.map((post, index) => {
            return (
              <Link
                href={`/en/news/${post.currentSlug}`}
                key={index}
                className={`w-full ${index === 0 ? "md:col-span-3 md:flex md:space-x-10" : ""}`}
              >
                <div
                  className={`${index === 0 ? "md:min-w-1/2 md:h-[400px]" : ""} h-[250px]   flex overflow-hidden `}
                >
                  <Image
                    src={urlFor(post.titleImage).width(1000).quality(80).url()}
                    width={500}
                    height={500}
                    alt={post.title}
                    className="object-cover rounded-md w-full h-full"
                  />
                </div>
                <div className={`py-5 md:py-0 ${index === 0 ? "" : "md:pt-5"}`}>
                  <div className="flex flex-col space-y-2 items-start">
                    <p className="text-gray-600 text-sm">
                      {" "}
                      {localizedDate(post.newsDate)}
                    </p>
                    <h2 className="font-semibold text-xl">{post.title}</h2>
                    <p>{post.description}</p>
                    <button className="bg-aisa-yellow px-6 py-2 mt-2 rounded-4xl font-semibold text-foreground text-sm hover:bg-yellow-500 duration-300 transition-all ease-in-out cursor-pointer">
                      Read more
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
        {/* <ul>
          {news.map((post) => {
            return (
              <li key={post.title}>
                <Image
                  src={urlFor(post.titleImage).url()}
                  width={500}
                  height={500}
                  alt={post.title}
                />
              </li>
            );
          })}
        </ul>
        {/* <ul>
          {news.map((post) => {
            return (
              <li key={post.title}>
                <Image
                  src={urlFor(post.titleImage).url()}
                  width={500}
                  height={500}
                  alt={post.title}
                />
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}
