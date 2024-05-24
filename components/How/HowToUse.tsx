/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const HowToUse = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full py-16 md:py-24 lg:py-32">
        {/* Text */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How to Use the Image to Prompt Generator
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-lg text-center text-[#647084]">
          Unleash Creativity in 3 Steps: Image to Prompt Generator
        </p>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold text-white">1</p>
            </div>
            <p className="text-xl font-semibold">Upload</p>
            <p className="text-sm text-[#647084]">
              Click "Upload Image" or drag & drop your picture.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold text-white">2</p>
            </div>
            <p className="text-xl font-semibold">AI Analyzes</p>
            <p className="text-sm text-[#647084]">
              Relax! Our AI analyzes your image content.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]">
              <p className="text-xl font-bold text-white">3</p>
            </div>
            <p className="text-xl font-semibold">Get Text Prompt</p>
            <p className="text-sm text-[#647084]">
              Within seconds, receive a detailed text description based on your
              image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
