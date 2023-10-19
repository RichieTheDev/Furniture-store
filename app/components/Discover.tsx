"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
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
      <div className="bg-gray-200 h-[90vh]">
        <div className="sm:w-[45%] pl-4 pt-8 sm:pl-16 sm:pt-32 lg:pt-48 sm:float-left">
          <h1 className="sm:text-3xl text-3xl lg:text-4xl font-bold ">
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
            perPage: 2.5,
            gap: "0.5rem",
            rewind: true,
            autoplay: true,
            arrows: true,
            type: "loop",
            drag: "free",
          }}
          className="sm:w-[55%] sm:float-right sm:pt-10 pt-4 lg:pt-20  "
        >
          {poster.slice(0, 3).map((item) => (
            <SplideSlide key={item._id}>
              <Image
                src={item.poster}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover  h-[70%] rounded-lg"
              />
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="flex justify-end flex-col ml-auto bg-gray-200 px-4 w-full">
        <h1 className="sm:text-3xl text-xl lg:text-5xl">
          Products That
          <br />
          May Be of Interest
        </h1>
        <br />
        <p className="pt-3">
          Exclusive Italian-made products for the comfort
          <br />
          and coziness of your daily life
        </p>
      </div>

      {/* <div>
        <div className="float-left w-1/2" key={poster[0]._id}>
          <Image src={poster[0].poster} width={400} height={400} alt="img" />
          <p>{poster[0].name}</p>
          <p>{poster[0].price}</p>
        </div>
        <div>
          {poster.slice(-2).map((item) => (
            <div className="float-right w-1/2" key={item._id}>
              <Image
                src={item.poster}
                width={200}
                height={200}
                alt="img"
                className="flex"
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Discover;
