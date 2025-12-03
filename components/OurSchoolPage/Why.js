import Image from "next/image";
import React from "react";

export default function Why() {
  return (
    <div className="py-20">
      <div className="space-y-5 max-w-4xl mx-auto text-foreground text-center wrapper ">
        <h2 className="font-serif text-4xl lg:text-5xl mb-20">
          Why AISA is the best place for your child?
        </h2>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/ourschool/why-icon-1.svg"
              height={100}
              width={100}
              alt="why_aisa"
              className="mb-4"
            />
            <h2 className="font-serif text-3xl mb-5">Caring Environment</h2>
            <p>
              Specially designed for students aged 3-10. We prioritize emotional
              safety and smooth adaptation for expatriate children.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/ourschool/why-icon-2.svg"
              height={100}
              width={100}
              alt="why_aisa"
              className="mb-4"
            />
            <h2 className="font-serif text-3xl mb-5">English Immersion</h2>
            <p>
              Children learn English naturally through play and inquiry, not
              pressure. Full support for non-native speakers.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Image
              src="/images/ourschool/why-icon-3.svg"
              height={100}
              width={100}
              alt="why_aisa"
              className="mb-4"
            />
            <h2 className="font-serif text-3xl mb-5">Healthy Growth</h2>
            <p>
              Nutritious meals, active outdoor play, and a curriculum that
              balances screen-free learning with modern skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
