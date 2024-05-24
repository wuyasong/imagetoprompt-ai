/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const CTASection = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center py-12 mx-auto text-center">
        <h2 className="mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Start for free! Convert your images into prompt!
          {/* <span className="text-blue-500">next level.</span> */}
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Turn your images into detailed and descriptive text prompts with our
          powerful AI-powered tool.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <a
            href="#image_to_prompt"
            className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
