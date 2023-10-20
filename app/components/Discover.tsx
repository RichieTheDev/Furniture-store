"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Furn {
  _id: string;
  name: string;
  poster: string;
  price: number;
}

const Discover = async () => {
  const poster = await client.fetch<Furn[]>(
    groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url}`,
  );

  return (
    <>
      <div className=" h-full sm:h-[90vh]">
        <div className="sm:w-[45%] pl-4 pt-8 sm:pl-8 lg:pl-12 sm:pt-24 lg:pt-28 sm:float-left">
          <h1 className="sm:text-4xl text-3xl  font-bold ">
            Discover Our
            <br />
            Featured Products
          </h1>
          <p className="sm:text-base  lg:text-lg pt-4 font-bold">
            Hliki furniture combines comfort and refines
            <br />
            design with the most innovative technologies
          </p>
        </div>

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
          className="sm:w-[55%] w-screen px-4 sm:px-0 sm:float-right sm:pt-10 pt-4 lg:pt-20  "
        >
          {poster.slice(0, 3).map((item) => (
            <SplideSlide key={item._id}>
              <Image
                src={item.poster}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover h-[70%] rounded-lg"
              />
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-sm font-bold ">${item.price}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="sm:px-6 px-4 lg:px-10 flex sm:justify-end sm:text-right flex-col sm:ml-auto  w-full">
        <h1 className="sm:text-3xl text-3xl lg:text-6xl font-bold">
          Products That
          <br />
          May Be of Interest
        </h1>
        <br />
        <p className="pt-1 sm:pt-3 font-semibold">
          Exclusive Italian-made products for the comfort
          <br />
          and coziness of your daily life
        </p>
      </div>

      <div className="pt-3 sm:pt-6 px-4 sm:px-10 ">
        <div className="sm:float-left sm:w-1/2  " key={poster[4]._id}>
          <Image
            src={poster[4].poster}
            width={350}
            height={350}
            alt="img"
            className="sm:h-[90%] h-[50%] object-cover flex justify-center mx-auto sm:flex-none sm:justify-normal sm:mx-0  rounded-md"
          />

          <p className="font-semibold flex justify-start sm:flex-none sm:justify-normal sm:mx-0">
            {poster[4].name}
          </p>
          <p className="text-sm font-bold flex justify-start sm:flex-none sm:justify-normal sm:mx-0">
            ${poster[4].price}
          </p>
        </div>
        <div className="px-4 sm:px-6 flex pt-4 sm:pt-0 gap-2 ">
          {poster.slice(5, 7).map((item) => (
            <div className="sm:float-right  sm:w-1/2" key={item._id}>
              <Image
                src={item.poster}
                width={250}
                height={250}
                alt="img"
                className="h-[70%] object-cover rounded-md"
              />
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 sm:pt-6 px-4 sm:px-10 clear-both">
        <div className="sm:float-right sm:w-[30%]" key={poster[8]._id}>
          <Image
            src={poster[8].poster}
            width={300}
            height={300}
            alt="img"
            className="h-[70%] object-cover flex justify-center mx-auto sm:flex-none sm:justify-normal sm:mx-0  rounded-md"
          />
          <p className="font-semibold flex justify-start  sm:flex-none sm:justify-normal  ">
            {poster[8].name}
          </p>
          <p className="text-sm font-bold flex justify-start  sm:flex-none sm:justify-normal  ">
            ${poster[8].price}
          </p>
        </div>
        <div className="px-4 flex gap-2 pt-4 sm:pt-0">
          {poster.slice(9, 11).map((item) => (
            <div className="sm:float-left sm:w-[70%]" key={item._id}>
              <Image
                src={item.poster}
                width={250}
                height={250}
                alt="img"
                className="h-[70%] object-cover rounded-md"
              />
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 flex  gap-2  ">
        {poster.slice(0, 2).map((item) => (
          <div className="" key={item._id}>
            <Image
              src={item.poster}
              width={250}
              height={250}
              alt="img"
              className="h-[70%]  object-cover rounded-md"
            />
            <p className="font-semibold truncate">{item.name}</p>
            <p className="text-sm font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discover;
