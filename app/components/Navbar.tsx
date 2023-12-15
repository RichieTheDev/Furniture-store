"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { fetchproducts } from "./fetchproducts";
import myStore from "@/store/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { CartItem } from "@/interfaces";

const Navbar = () => {
  // State for storing product data
  const [data, setData] = useState<CartItem[]>([]);
  // Fetch products data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchproducts();
      setData(productsData);
    };

    fetchData();
  }, []);

  // State for controlling mobile navigation menu
  const [nav, setNav] = useState<boolean>(false);

  // Toggle function for mobile navigation menu
  const handleClick = () => {
    setNav(!nav);
  };
  const { user } = useUser();
  const logged = user !== null;
  // Access the cart state from the global store
  const cart = myStore((state) => state.cart);

  // Calculate total items in the cart by matching with product data
  const cartCount = cart.reduce((total, cartItem) => {
    const foundItem = data.find((item) => item._id === cartItem._id);
    return total + (foundItem ? cartItem.quantity : 0);
  }, 0);

  return (
    <div className="pt-2.5 px-3 sm:pt-4 sm:px-12 pb-4">
      <div className="flex items-center font-bold">
        <div className="flex justify-start space-x-3">
          {/* Button to toggle mobile navigation menu */}
          <button onClick={handleClick}>
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </button>
          {/* Brand link */}
          <Link href="/" className="text-4xl">
            BLIMEY
          </Link>
        </div>
        {/* Desktop navigation links */}
        <div className="hidden sm:flex ml-auto items-center space-x-6">
          {logged ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/account/sign-up">Account</Link>
          )}
          <p>Search</p>
          {/* Link to Cart with cart count */}
          <Link href="/cart" className="relative">
            <MdOutlineShoppingCart size={35} />{" "}
            <span className="absolute -top-2 left-8">{cartCount}</span>
          </Link>
        </div>
        {/* Mobile Cart icon with count */}
        <div className="ml-auto space-x-4 flex items-center sm:hidden">
          {logged ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/account/sign-up">Account</Link>
          )}
          <Link href="/cart" className="relative sm:hidden pr-2">
            <MdOutlineShoppingCart size={35} />
            <p className="sm:hidden absolute -top-3 left-8 text-lg">
              {cartCount}
            </p>
          </Link>
        </div>
      </div>
      {/* Mobile navigation menu */}
      {nav && (
        <ul
          onClick={handleClick}
          className="fixed left-0 top-0 w-full z-10 h-screen text-white bg-black font-medium items-center text-center ease-in-out duration-500 overflow-hidden"
        >
          {/* Close Button for mobile navigation menu */}
          <AiOutlineClose
            onClick={handleClick}
            className="absolute sm:top-6 sm:left-12 top-4 left-4"
            size={35}
          />
          <div className=" justify-center items-center lg:space-x-40 lg:flex">
            {/* Image on mobile menu */}
            <Image
              src="/img13.jpg"
              width={350}
              height={350}
              alt="img"
              className=" object-cover hidden lg:inline rounded-md"
            />
            {/* Navigation links on mobile menu */}
            <p>
              <li className="linklist mt-24">
                <Link href="/">Home</Link>
              </li>
              <li className="linklist">
                <Link href="/products">Products</Link>
              </li>
              <li className="linklist">
                <Link href="/cart">My Cart</Link>
              </li>
              <li className="linklist">
                <Link href="/about">About Us</Link>
              </li>
              <li className="linklist">
                <Link href="/cart">Contact Us</Link>
              </li>
            </p>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
