import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Menu from "../products/(menu)/Menu";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const Allproducts = async () => {
  const furnitureData = await client.fetch(
    groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );

  return (
    <div>
      <Navbar />
      <Menu />
      <div className="px-4 sm:px-12">
        <Link
          href={`/products/${furnitureData[14].slug}`}
          className="float-left"
        >
          <Image
            src={furnitureData[14].poster}
            width={350}
            height={300}
            alt="/"
            className="bigimage"
          />
          <p className="flexname">{furnitureData[14].name}</p>
          <p className="flexprice">${furnitureData[14].price}</p>
        </Link>
        <div className="space-x-2 sm:space-x-4 flex float-right pt-2 lg:pt-0">
          <Link href={`/products/${furnitureData[1].slug}`}>
            <Image
              src={furnitureData[1].poster}
              width={250}
              height={250}
              alt="/"
              className="sm:gridotheritems smallimage"
            />
            <p className="flexname">{furnitureData[1].name}</p>
            <p className="flexprice">${furnitureData[1].price}</p>
          </Link>
          <Link href={`/products/${furnitureData[2].slug}`}>
            <Image
              src={furnitureData[2].poster}
              width={250}
              height={250}
              alt="/"
              className="sm:gridotheritems smallimage"
            />
            <p className="flexname">{furnitureData[2].name}</p>
            <p className="flexprice">${furnitureData[2].price}</p>
          </Link>
        </div>
      </div>

      <div className="clear-both pt-4 px-3 sm:px-12 sm:pt-10">
        <Link
          href={`/products/${furnitureData[3].slug}`}
          className="lg:float-right "
        >
          <Image
            src={furnitureData[3].poster}
            width={350}
            height={300}
            alt="/"
            className="bigimage"
          />
          <p className="flexname">{furnitureData[3].name}</p>
          <p className="flexprice">${furnitureData[3].price}</p>
        </Link>
        <div className="space-x-2 sm:space-x-4 flex justify-center sm:float-left">
          <Link href={`/products/${furnitureData[4].slug}`}>
            <Image
              src={furnitureData[4].poster}
              width={250}
              height={250}
              alt="/"
              className="smallimage"
            />
            <p className="flexname">{furnitureData[4].name}</p>
            <p className="flexprice">${furnitureData[4].price}</p>
          </Link>
          <Link href={`/products/${furnitureData[5].slug}`}>
            <Image
              src={furnitureData[5].poster}
              width={250}
              height={250}
              alt="/"
              className="smallimage"
            />
            <p className="flexname">{furnitureData[5].name}</p>
            <p className="flexprice">${furnitureData[5].price}</p>
          </Link>
        </div>
      </div>

      <div className="clear-both pt-2 px-3 sm:px-12 sm:pt-10">
        <Link
          href={`/products/${furnitureData[9].slug}`}
          className="lg:float-right"
        >
          <Image
            src={furnitureData[9].poster}
            width={250}
            height={250}
            alt="/"
            className="bigimage"
          />
          <p className="flexname">{furnitureData[9].name}</p>
          <p className="flexprice">${furnitureData[9].price}</p>
        </Link>
        <div className="space-x-4 flex float-left">
          <Link href={`/products/${furnitureData[10].slug}`}>
            <Image
              src={furnitureData[10].poster}
              width={250}
              height={250}
              alt="/"
              className="rounded-lg object-cover w-[50vw] h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh] "
            />
            <p className="flexname">{furnitureData[10].name}</p>
            <p className="flexprice">${furnitureData[10].price}</p>
          </Link>
          <Link href={`/products/${furnitureData[8].slug}`}>
            <Image
              src={furnitureData[8].poster}
              width={250}
              height={250}
              alt="/"
              className="rounded-lg  w-[50vw] object-cover h-[20vh] sm:h-[30vh] lg:w-[21vw] lg:h-[45vh]"
            />
            <p className="flexname">{furnitureData[8].name}</p>
            <p className="flexprice">${furnitureData[8].price}</p>
          </Link>
        </div>
      </div>

      <div className="clear-both pt-6 px-3 sm:px-12 sm:pt-10">
        <Link
          href={`/products/${furnitureData[7].slug}`}
          className="lg:float-left "
        >
          <Image
            src={furnitureData[7].poster}
            width={350}
            height={300}
            alt="/"
            className="lg:w-[35vw] w-screen object-cover lg:h-[65vh] h-[35vh] mx-auto sm:mx-0 rounded-lg "
          />
          <p className="flexname">{furnitureData[7].name}</p>
          <p className="flexprice">${furnitureData[7].price}</p>
        </Link>
        <div className="mt-4 space-x-4 flex sm:float-right">
          <Link href={`/products/${furnitureData[11].slug}`}>
            <Image
              src={furnitureData[11].poster}
              width={250}
              height={250}
              alt="/"
              className="smallimage"
            />
            <p className="flexname">{furnitureData[11].name}</p>
            <p className="flexprice">${furnitureData[11].price}</p>
          </Link>
          <Link href={`/products/${furnitureData[12].slug}`}>
            <Image
              src={furnitureData[12].poster}
              width={250}
              height={250}
              alt="/"
              className="smallimage"
            />
            <p className="flexname">{furnitureData[12].name}</p>
            <p className="flexprice">${furnitureData[12].price}</p>
          </Link>
        </div>

        <div className="clear-both pt-4 flex sm:space-x-4 sm:pt-10">
          <Link
            href={`/products/${furnitureData[13].slug}`}
            className="hidden sm:inline"
          >
            <Image
              src={furnitureData[13].poster}
              width={250}
              height={250}
              alt="/"
              className="smallimage"
            />
            <p className="flexname">{furnitureData[13].name}</p>
            <p className="flexprice">${furnitureData[13].price}</p>
          </Link>
          <div className="space-x-4 flex">
            <Link href={`/products/${furnitureData[15].slug}`}>
              <Image
                src={furnitureData[15].poster}
                width={250}
                height={250}
                alt="/"
                className="smallimage"
              />
              <p className="flexname">{furnitureData[15].name}</p>
              <p className="flexprice">${furnitureData[15].price}</p>
            </Link>
            <Link href={`/products/${furnitureData[0].slug}`}>
              <Image
                src={furnitureData[0].poster}
                width={250}
                height={250}
                alt="/"
                className="smallimage"
              />
              <p className="flexname">{furnitureData[0].name}</p>
              <p className="flexprice">${furnitureData[0].price}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
