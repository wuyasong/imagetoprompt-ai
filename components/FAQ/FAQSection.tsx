/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const FAQSection = () => {
  return (
    <section className="w-full">
      {/* <!-- FAQ Container --> */}
      <div className="mx-auto w-full py-16 md:py-24 lg:py-32">
        {/* <!-- FAQ Title --> */}
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          {/* <p className="text-sm font-bold uppercase text-[#276ef1]">FAQS</p> */}
          <h2 className="text-3xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>
          {/* <p className="mx-auto mt-4 max-w-lg text-[#647084]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p> */}
        </div>
        {/* <!-- FAQ Content --> */}
        <div className="mb-12 flex flex-col items-center">
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">What is Image to Prompt?</p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              Image to Prompt is an AI-powered tool that helps you generate
              detailed text descriptions from your images.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                How does Image to Prompt work?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              You upload your image, our AI analyzes it, and then generates a
              text prompt describing the content.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                What types of images can I use with Image to Prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              We support various image formats! Upload photos, illustrations,
              paintings, and more.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                Is Image to Prompt free to use?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              We offer both free and premium plans. Check our pricing page for
              details.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                How long does it take to generate a text prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              It typically takes just seconds for our AI to analyze your image
              and generate a prompt.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                How long does it take to generate a text prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              It typically takes just seconds for our AI to analyze your image
              and generate a prompt.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                Can I edit the generated text prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              Absolutely! You can edit and customize the prompt to fit your
              specific needs.
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                What are some creative ways to use Image to Prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              Use generated prompts for writing inspiration, social media
              captions, blog post ideas, and more!
            </p>
          </div>
          {/* <!-- FAQ Item --> */}
          <div className="mb-6 w-full border-b-[2px] border-[#dfdfdf] p-8">
            <div className="flex cursor-pointer justify-between">
              <p className="text-xl font-bold">
                How can I get better results from Image to Prompt?
              </p>
              <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                <div className="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p className="my-4">
              Use high-quality images with clear visuals for optimal AI
              analysis.
            </p>
          </div>
        </div>
        {/* <!-- FAQ Text --> */}
        {/* <p className="text-center">Can’t find the answer you’re looking for? Reach out to our <a href="#">customer support team</a>.</p> */}
      </div>
    </section>
  );
};

export default FAQSection;
