import React from "react";
import Navbar from "../(components)/Navbar";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const About = async () => {
  const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );

  return (
    <>
      <Navbar />
      <div className="px-3 sm:px-12">
        <h1
          data-testId="about-title"
          className="text-4xl font-bold sm:text-5xl text-center mt-4 "
        >
          About Us
        </h1>
        <p className="text-lg sm:text-right text-justify font-semibold mt-2">
          Our product and Furniture designs evolve through a data driven <br />
          process in close collaboration with our clients combined
          <br /> with our passion and dedication for design
        </p>
        <div className="sm:hidden mt-4 sm:mt-8 flex justify-evenly space-x-2">
          <Image
            src={furnitureData[18].poster}
            height={200}
            width={250}
            alt="/"
            className="w-[45vw] rounded-xl object-cover"
          />
          <Image
            src={furnitureData[19].poster}
            height={200}
            width={250}
            alt="/"
            className="w-[45vw] rounded-xl object-cover"
          />
        </div>
        <div className="mt-4 sm:mt-8 hidden sm:flex gap-4 justify-evenly">
          <Image
            src={furnitureData[18].poster}
            height={200}
            width={250}
            alt=""
            className="w-[45vw] sm:h-[45vh] lg:h-[60vh] lg:object-cover rounded-lg"
          />
          <Image
            src={furnitureData[19].poster}
            height={200}
            width={250}
            alt=""
            className="w-[45vw] sm:h-[45vh] lg:h-[60vh] lg:object-cover rounded-lg"
          />
        </div>
        <div className="pt-4">
          <h1
            data-testid="header"
            className="text-4xl font-bold sm:text-5xl  mt-4"
          >
            Exceptional <br />
            Savoir
          </h1>
          <p className="pt-2 font-semibold flex justify-evenly items-baseline gap-4">
            From the start of every project, we make sure we <br />
            develop an in-depth knowledge of the industry <br />
            and product we are developing
            <p className="">
              We strive to develop long-term products
              <br /> and concepts that are durable, sustainable
              <br />
              and age gracefully over time.
            </p>
          </p>

          <Image
            src="/img002.jpg"
            height={200}
            width={250}
            alt=""
            className="pt-4 w-screen rounded-xl sm:h-[35vh] lg:h-[60vh] sm:object-cover "
          />

          <div className="mt-4 sm:mt-6">
            <h1 className="text-4xl font-bold sm:text-5xl text-left  sm:text-right mt-4">
              Attention <br /> To The Details
            </h1>
            <p className="pt-2 sm:pt-4 font-semibold text-left  sm:text-right">
              Durability and Feasibility are important aspects
              <br />
              of our design approach
            </p>
            <div className="pt-2 sm:pt-4 flex justify-evenly">
              <div className="space-y-4">
                <Image
                  src={furnitureData[4].poster}
                  height={200}
                  width={250}
                  alt=""
                  className="w-[35vw] sm:w-[40vw] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] object-cover rounded-lg"
                />
                <Image
                  src={furnitureData[7].poster}
                  height={200}
                  width={250}
                  alt=""
                  className=" w-[35vw] sm:w-[40vw] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-end ml-auto">
                <Image
                  src={furnitureData[10].poster}
                  height={200}
                  width={250}
                  alt=""
                  className="w-[55vw] sm:w-[45vw] lg:w-[48vw] sm:h-[55vh] lg:h-[90vh] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
