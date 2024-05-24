"use client";

import { FC } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const HeroSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
          AI-Powered
          <span className="text-indigo-600"> Image to Prompt</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Turn your images into detailed and descriptive text prompts with our
          powerful AI-powered tool.
        </p>
      </div>
      {/* <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <a
          href="#"
          className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
        >
          Get started
        </a>
        <a
          href="#"
          className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
        >
          Try it out
        </a>
      </div> */}
    </section>
  );
};

export default HeroSection;
