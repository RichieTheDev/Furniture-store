"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="pt-1 px-3 sm:pt-4 sm:px-12 bg-hero bg-cover bg-center h-screen text-black">
      <div className="flex items-center font-bold">
        <div className="flex justify-start space-x-3">
          {!nav ? (
            <button>
              <AiOutlineMenu size={30} onClick={handleClick} />
            </button>
          ) : (
            <button>
              <AiOutlineClose size={30} onClick={handleClick} />
            </button>
          )}
          <h1 className="text-2xl">HIKLI</h1>
        </div>
        <div className="hidden sm:flex ml-auto space-x-6">
          <p>Search</p>
          <p>Account</p>
          <p>Cart</p>
        </div>
      </div>
      <div className="pt-10 sm:pt-24">
        <h1 className="text-6xl sm:text-8xl">Comfort</h1>
        <h1 className="text-5xl sm:text-8xl">In Furniture</h1>
        <p className="font-medium pt-10 sm:pt-6 text-xl">
          See our thoughtfully curated collection of Furniture, lighting, and
          Objects
        </p>
        <button className="font-bold px-4 py-2 mt-8 border rounded-md bg-teal-700 text-teal-50 text-xl">
          View Collection
        </button>
        {/* <p className="hidden sm:inline font-bold text-lg">
          Functional, practical interior solutions that make life simple and
          beautiful
        </p> */}
      </div>
    </div>
  );
};

export default Navbar;