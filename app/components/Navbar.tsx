"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useStore from "@/store/store";
import {fetchProducts} from "../components/fetchproducts";

const Navbar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setData(productsData);
    };

    fetchData();
  }, []);  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((total, cartItem) => {
    const foundItem =data.find((item) => item._id === cartItem._id);
    return total + (foundItem ? cartItem.quantity : 0);
  }, 0);
  return (
    <div className="pt-1 px-3 sm:pt-4 sm:px-12 pb-4">
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
          <Link href="/cart">Cart{cartCount}</Link>
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
                <Link href="/products">Products</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/cart">Lookbook</Link>
              </li>
              <li className="hover:text-amber-600 text-lg p-4">
                <Link href="/about">about Us</Link>
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
    </div>
  );
};

export default Navbar;
