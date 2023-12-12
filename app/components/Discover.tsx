'use client'
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { CartItem } from "@/store/store";
import Link from "next/link";


// Create the Discover component
const Discover =  async() => {
  // Fetch furniture data from the Sanity CMS
  
  const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price,"slug": slug.current, "poster": poster.asset->url}`,
  );


  return (
    <>
      {/* Featured Products Section */}
      <div className="h-full">
        {/* Left content */}
        <div className="sm:w-[45%] pl-4 pt-8 sm:pl-8 lg:pl-12 sm:pt-24 lg:pt-28 sm:float-left">
          <h1 className="sm:text-4xl text-3xl font-bold">
            Discover Our
            <br />
            Featured Products
          </h1>
          <p className="sm:text-base lg:text-lg pt-4 font-bold">
            Hliki furniture combines comfort and refines
            <br />
            design with the most innovative technologies
          </p>
        </div>

        {/* Splide (Slider) component */}
        <Splide
          options={{
            pagination: false,
            perPage: 3,
            gap: "0.5rem",
            rewind: false,
            autoplay: true,
            arrows: true,
            type: "loop",
            drag: "free",
            breakpoints: {
              640: {
                perPage: 2,
                arrows: false,
              },
              768: {
                perPage: 2,
                arrows: false,
              },
            },
          }}
          className="sm:w-[55%] w-screen px-4 sm:px-0 sm:float-right sm:pt-10 pt-4 lg:pt-20"
        >
          {/* Map over furniture data and create SplideSlide components */}
          {furnitureData.slice(0, 14).map((item:CartItem) => (
            <SplideSlide key={item._id}>
              <Link href={`/products/${item.slug}`}>              
              <Image
                src={item.poster}
                alt={item.name}
                width={300}
                height={300}
                className="h-[70%] object-cover rounded-lg"
              />
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-sm font-bold">${item.price}</p>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Products That May Be of Interest Section */}
      <div className="sm:px-6 px-4 lg:px-10 flex sm:justify-end sm:text-right flex-col sm:ml-auto w-full">
        <h1 className="h1header">
          Products That
          <br />
          May Be of Interest
        </h1>
        <br />
        <p className="font-semibold">
          Exclusive Italian-made products for the comfort
          <br />
          and coziness of your daily life
        </p>
      </div>

      {/* Display additional furniture items */}
      <div className="pt-4 px-4 sm:px-10">
        <div
          className="sm:float-left "
          key={furnitureData[4]._id}
        >
          {/* Display the fifth furniture item */}
          <Image
            src={furnitureData[4].poster}
           
            width={350}
            height={300}
            alt="img"
            className=" object-cover rounded-lg w-screen h-[30vh] sm:w-[35vw] sm:h-[35vh] lg:w-[45vw] lg:h-[50vh] xl:h-[75vh] xl:w-[40vw]"
          />

          <p className="flexname">
            {furnitureData[4].name}
          </p>
          <p className="flexprice">
            ${furnitureData[4].price}
          </p>
        </div>
        <div className="flex sm:pl-6 lg:pl-11 xl:pl-12 ml-auto pt-4 sm:pt-0 gap-4 mx-auto">
          {/* Map over and display the next two furniture items */}
          {furnitureData.slice(5, 7).map((item:CartItem) => (
            <div className="sm:float-right " key={item._id}>
              <Image
                src={item.poster}
                width={250}
                height={250}                
                alt="img"
                className="object-cover rounded-lg h-[65%] sm:h-[85%] xl:w-[45vw] xl:h-[60vh] "
              />
              <p className="flexname">{item.name}</p>
              <p className="flexprice">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;