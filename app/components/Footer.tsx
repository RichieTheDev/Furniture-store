'use client'
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";import Link from "next/link";



const Footer = async() => {
  const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );
  return (
    <>
      <div className="sm:px-12 px-4 pt-6 clear-both">
        <div>
          <h1 className="h1header">
            Featured Products
          </h1>
          <Splide
          options={{
            pagination: false,
            perPage: 4,
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
                perPage: 3,
                arrows: false,
              },
            },
          }}
          className="pt-4"
        >
          {/* Map over furniture data and create SplideSlide components */}
          {furnitureData.slice(0, 14).map((item:any) => (
            <SplideSlide key={item._id}>
              <Image
                src={item.poster}
                alt={item.name}
                width={300}
                height={300}
                className="h-[70%] object-cover rounded-lg"
              />
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </SplideSlide>
          ))}
        </Splide>
        </div>
        <div className="sm:text-right">
        <h1 className="h1header">
          Subscribe To Our
          <br />
          NewsLetter
        </h1>
        <p className="font-semibold pt-2 pb-3">Never miss out, stay updated</p>
        <input
          type="text"
          className="border p-2 bg-slate-100 rounded-md w-full sm:w-[40vw] lg:w-[35vw] "
          placeholder="@email.com"
        />
        </div>
       
      </div>
      <div className="w-[95%] mt-10  mx-auto border-t border-gray-900"></div>
      <div className="px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row  sm:justify-between items-baseline mt-6">
          <div className="flex flex-col">
            <h1 className="h1header">Hikli</h1>
            <p className="text-lg sm:text-2xl font-semibold">
              We have provided clients around the world
              <br />
              with solutions for a diverse range of design
              <br />
              requirements{" "}
            </p>
          </div>
          <div className="flex mx-auto flex-col space-y-4 items-baseline text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <p>Lookbook</p>
            <Link href="/about">About Us</Link>
            <p>Contact</p>
          </div>
          <div className="hidden sm:flex mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p>Subscribe</p>
            <p>Support</p>
          </div>
          <div className="hidden lg:flex  mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-10  mx-auto border-t border-gray-900"></div>
      <p className="flex justify-center mx-auto font-semibold pb-6">
        2023 HIKLI. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
