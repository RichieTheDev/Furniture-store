"use client";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CartItem } from "@/interfaces";

const Footer = async() => {
    const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price,"slug": slug.current, "poster": poster.asset->url}`,
  );

  return (
    <>
      <div className="sm:px-12 px-4 pt-6 clear-both">
        <div>
          <h1 className="h1header">Featured Products</h1>
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
        <div className="sm:text-right">
          <h1 className="h1header">
            Subscribe To Our
            <br />
            NewsLetter
          </h1>
          <p className="font-semibold pt-2 pb-3">
            Never miss out, stay updated
          </p>
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
            <h1 className="h1header">Blimey</h1>
            <p className="text-lg sm:text-2xl font-semibold">
              We have provided clients around the world
              <br />
              with solutions for a diverse range of design
              <br />
              requirements{" "}
            </p>
          </div>
          <div className="flex mx-auto flex-col space-y-4 items-baseline text-lg font-semibold">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <Link href="/products" className="hover:text-amber-500">Products</Link>
            <p className="hover:text-amber-500">Lookbook</p>
            <Link href="/about" className="hover:text-amber-500">About Us</Link>
            <p className="hover:text-amber-500">Contact</p>
          </div>
          <div className="hidden sm:flex mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p className="hover:text-amber-500">Subscribe</p>
            <p className="hover:text-amber-500">Support</p>
          </div>
          <div className="hidden lg:flex  mx-auto  flex-col space-y-4 items-baseline text-lg  font-semibold">
            <p className="hover:text-amber-500">Twitter</p>
            <p className="hover:text-amber-500">Instagram</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-10  mx-auto border-t border-gray-900"></div>
      <p className="flex justify-center mx-auto font-semibold pb-6">
        2023 Blimey. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
