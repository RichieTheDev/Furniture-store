import React from "react";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

const Products = async () => {
  //etch furniture data from the Sanity CMS
  const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url}`,
  );
  return (
    <div>
      <Navbar />
      <div className="px-3 sm:px-12">
        <h1 className="text-4xl font-bold 5xl mt-4 ">All Products</h1>
        <div className="mt-2 font-semibold flex space-x-4   ">
          <p>All Products</p>
          <p>Tables</p>
          <p>Lamps</p>
          <p>Chairs</p>
          <p>Shelves</p>
          <p className="hidden sm:flex">Kitchen Sets</p>
        </div>

        <div className="mt-4">
          <div className="float-left">
            <Image
              src={furnitureData[14].poster}
              width={350}
              height={300}
              alt="/"
              className="w-[35vw] lg:w-[35vw] lg:h-[65vh] object-cover rounded-lg "
            />
            <p className="flex justify-center mx-auto font-semibold sm:text-base text-sm  ">
              {furnitureData[14].name}
            </p>
            <p className="flex justify-center mx-auto font-bold sm:text-sm text-xs  ">
              ${furnitureData[14].price}
            </p>
          </div>
          <div className="space-x-2 sm:space-x-4 flex float-right">
            <p>
              <Image
                src={furnitureData[1].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[25vw] sm:w-[23vw] sm:h-[30vh] lg:w-[25vw] lg:h-[50vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[1].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[1].price}
              </p>
            </p>
            <p>
              <Image
                src={furnitureData[2].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[25vw] sm:w-[23vw] sm:h-[30vh] lg:w-[25vw] lg:h-[50vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[2].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[2].price}
              </p>
            </p>
          </div>
        </div>

        <div className="clear-both pt-4  sm:pt-10">
          <div className="lg:float-right ">
            <Image
              src={furnitureData[3].poster}
              width={350}
              height={300}
              alt="/"
              className="lg:w-[35vw] sm:w-screen object-cover lg:h-[65vh] h-[35vh] mx-auto sm:mx-0 rounded-lg "
            />
            <p className="font-semibold sm:text-base text-sm flex justify-center mx-auto  ">
              {furnitureData[3].name}
            </p>
            <p className="flex justify-center mx-auto font-bold sm:text-sm text-xs  ">
              ${furnitureData[3].price}
            </p>
          </div>
          <div className="mt-4 space-x-2 sm:space-x-4 flex justify-center sm:float-left">
            <p>
              <Image
                src={furnitureData[4].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[50vw] lg:w-[21vw] h-[20vh] sm:h-[30vh] lg:h-[45vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[4].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[4].price}
              </p>
            </p>
            <p>
              <Image
                src={furnitureData[5].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[50vw] lg:w-[21vw] h-[20vh] sm:h-[30vh] lg:h-[45vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[5].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[5].price}
              </p>
            </p>
          </div>
        </div>

        <div className="clear-both pt-4 sm:pt-10">
          <div className="lg:float-right  hidden sm:inline">
            <Image
              src={furnitureData[9].poster}
              width={250}
              height={250}
              alt="/"
              className="rounded-lg object-cover w-screen h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
            />
            <p className="flex justify-center mx-auto font-semibold sm:text-base text-sm  ">
              {furnitureData[9].name}
            </p>
            <p className="flex justify-center mx-auto font-bold sm:text-sm text-xs  ">
              ${furnitureData[9].price}
            </p>
          </div>
          <div className="space-x-4 flex float-left">
            <p>
              <Image
                src={furnitureData[10].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[50vw] h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh] "
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[10].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[10].price}
              </p>
            </p>
            <p>
              <Image
                src={furnitureData[8].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg  w-[50vw] object-cover h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[8].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[8].price}
              </p>
            </p>
          </div>
        </div>

        <div className="clear-both pt-6 sm:pt-10">
          <div className="lg:float-left ">
            <Image
              src={furnitureData[7].poster}
              width={350}
              height={300}
              alt="/"
              className="lg:w-[35vw] w-screen object-cover lg:h-[65vh] h-[35vh] mx-auto sm:mx-0 rounded-lg "
            />
            <p className="flex justify-center mx-auto font-semibold sm:text-base text-sm">
              {furnitureData[7].name}
            </p>
            <p className="flex justify-center mx-auto font-bold sm:text-sm text-xs">
              ${furnitureData[7].price}
            </p>
          </div>
          <div className="mt-4 space-x-4 flex sm:float-right">
            <p>
              <Image
                src={furnitureData[11].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg w-[50vw] lg:w-[21vw] h-[20vh] sm:h-[30vh] lg:h-[45vh]"
              />
              <p className="font-semibold sm:text-base text-sm">
                {furnitureData[11].name}
              </p>
              <p className="font-bold sm:text-sm text-xs  ">
                ${furnitureData[11].price}
              </p>
            </p>
            <p>
              <Image
                src={furnitureData[12].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg object-cover w-[50vw] lg:w-[21vw] h-[20vh] sm:h-[30vh] lg:h-[45vh]"
              />
              <p className="font-semibold sm:text-base text-sm ">
                {furnitureData[12].name}
              </p>
              <p className="font-bold sm:text-sm text-xs   ">
                ${furnitureData[12].price}
              </p>
            </p>
          </div>

          <div className="clear-both pt-4 flex sm:space-x-4 sm:pt-10">
            <div className="hidden sm:inline">
              <Image
                src={furnitureData[13].poster}
                width={250}
                height={250}
                alt="/"
                className="rounded-lg w-[50vw] h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
              />
              <p className="flex lg:justify-center mx-auto font-semibold sm:text-base text-sm  ">
                {furnitureData[13].name}
              </p>
              <p className="flex lg:justify-center mx-auto font-bold sm:text-sm text-xs  ">
                ${furnitureData[13].price}
              </p>
            </div>
            <div className="space-x-4 flex ">
              <p>
                <Image
                  src={furnitureData[15].poster}
                  width={250}
                  height={250}
                  alt="/"
                  className="rounded-lg w-[50vw] h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
                />
                <p className="font-semibold sm:text-base text-sm">
                  {furnitureData[15].name}
                </p>
                <p className="font-bold sm:text-sm text-xs  ">
                  ${furnitureData[15].price}
                </p>
              </p>
              <p>
                <Image
                  src={furnitureData[0].poster}
                  width={250}
                  height={250}
                  alt="/"
                  className="rounded-lg w-[50vw] h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
                />
                <p className="font-semibold sm:text-base text-sm">
                  {furnitureData[0].name}
                </p>
                <p className="font-bold sm:text-sm text-xs  ">
                  ${furnitureData[0].price}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
