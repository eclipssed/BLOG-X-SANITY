import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg3 from "@/public/assets/heroImg3.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:px-12  py-6 ">
      {/* Text Content Section */}
      <div className="">
        <h2 className="xl:text-5xl text-4xl mb-4">Welcome to Parenthood</h2>
        <p className="xl:text-xl mb-4">
          Unlock a treasure trove of expert advice, insightful tips, and a
          wealth of resources to guide and support you through every milestone
          and challenge on your parenting journey. We're here to empower you
          every step of the way.
        </p>
        <Link
          href="/blog"
          className="bg-green-500 xl:text-xl hover:bg-green-600 no-underline text-white font-semibold py-2 px-6 rounded-full inline-block transition duration-300"
        >
          Read Our Blog Posts
        </Link>
      </div>
      {/* Image Section */}

      <div className="relative">
        <Image
          src={heroImg3}
          alt="Hero Image"
          height={800}
          width={800}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
