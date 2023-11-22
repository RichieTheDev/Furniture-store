"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Hero = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="pt-1 px-3 sm:pt-4 sm:px-12 bg-hero bg-cover bg-center h-full w-full lg:h-[95vh] pb-4 text-black">
      <div className="flex items-center font-bold">
        <div className="flex justify-start space-x-3">
          <button onClick={handleClick}>
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </button>
          <Link href="/" className="text-4xl">
            HIKLI
          </Link>
        </div>
        <div className="hidden sm:flex ml-auto space-x-6">
          <p>Search</p>
          <p>Account</p>
          <p>Cart</p>
        </div>
      </div>
      {nav && (
        <ul
          onClick={handleClick}
          className="fixed left-0 top-0 w-full z-10 h-screen text-white bg-black font-medium items-center text-center ease-in-out duration-500 overflow-hidden"
        >
          {/* Close Button */}
          <AiOutlineClose
            onClick={handleClick}
            className="absolute sm:top-6 sm:left-12 top-4 left-4"
            size={35}
          />
          <div className=" justify-center items-center lg:space-x-40  lg:flex">
            <Image
              src="/img13.jpg"
              width={350}
              height={350}
              alt="img"
              className=" object-cover hidden lg:inline rounded-md"
            />
            <p
              className="
          "
            >
              <li className="hover:text-amber-600 text-lg p-4 mt-24">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/Products">Products</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/cart">Lookbook</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/About">About Us</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/cart">Contact</Link>
              </li>
              <li className="hover:text-amber-600 text-sm p-4">
                <Link href="/cart">Subscribe</Link>
              </li>{" "}
              <li className="hover:text-amber-600 text-sm p-4">
                <Link href="/cart">Support </Link>
              </li>{" "}
              <li className="hover:text-amber-600 text-sm p-4">
                <Link href="/cart">Twitter</Link>
              </li>{" "}
              <li className="hover:text-amber-600 text-sm p-4">
                <Link href="/cart">Instagram</Link>
              </li>
            </p>
          </div>
        </ul>
      )}
      <div className="pt-10 sm:pt-24 sm:relative">
        <h1 className="text-7xl sm:text-8xl">Comfort</h1>
        <h1 className="text-5xl sm:text-8xl">In Furniture</h1>
        <p className="font-semibold pt-10 sm:pt-6 text-xl">
          See our thoughtfully curated collection of Furniture, lighting, and
          Objects
        </p>
        <button className=" font-bold px-4 py-2 mt-8 border rounded-md bg-teal-600 text-teal-50 text-xl">
          View Collection
        </button>
        <p className=" font-bold pt-6 sm:absolute sm:mb-10  sm:mr-14 sm:-bottom-12 sm:right-0  text-base">
          Functional, practical interior solutions
          <br /> that make life simple and beautiful
        </p>
      </div>
    </div>
  );
};

export default Hero;
