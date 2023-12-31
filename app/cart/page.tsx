"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../(components)/Navbar";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { BsCartPlusFill } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import { CartItem } from "@/interfaces";
import myStore from "@/store/store";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

const CartPage = () => {
  const [all, setAll] = useState<CartItem[]>([]);
  const cart: CartItem[] = myStore((state) => state.cart);
  const removeItem = myStore((state) => state.removeItem);
  const add = myStore((state) => state.add);
  const minus = myStore((state) => state.minus);

  // State for total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch table data from the Sanity CMS
    const fetchData = async () => {
      const data = await client.fetch(
        groq`*[_type=='table'|| _type=='furniture' || _type=='lamp']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
      );
      setAll(data);
    };

    fetchData();
  }, []);

  // Update total price when cart changes
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const cartCount = cart.reduce((total, cartItem) => {
    const foundItem = all.find((item) => item._id === cartItem._id);
    return total + (foundItem ? cartItem.quantity : 0);
  }, 0);

  //   Stripe Payment
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  );
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/stripe", {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };

  return (
    <div className="pb-4">
      <Navbar />
      <div className="px-4 sm:px-14 lg:px-20">
        <p className="flex flex-col sm:justify-between items-center">
          <p className="h1header">MY BAG {cartCount}</p>
          <p>Items are reserved for 60 minutes</p>
        </p>
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center mx-auto items-center space-y-4">
            {/* Empty cart icon */}
            <BsCartPlusFill size={55} className="text-yellow-500" />
            <p className="font-bold text-lg sm:text-xl">
              Your cart is empty. Go and shop!
            </p>
            {/* Start shopping link */}
            <Link
              href="/products"
              className="py-2 px-4 rounded-lg hover:bg-orange-300 bg-orange-500 text-orange-50"
            >
              START SHOPPING
            </Link>
          </div>
        ) : (
          <div className="mt-4 flex flex-col space-y-4 px-2 sm:px-0 sm:float-left sm:w-1/2">
            {cart.map((item: CartItem) => (
              <div key={item._id} className="flex ">
                <Image
                  src={item.poster}
                  alt={item.name}
                  width={250}
                  height={250}
                  className="h-32 w-32 object-cover rounded-md"
                />
                <div className="flex flex-col pl-4">
                  <p className="flex items-center">
                    <p className="font-semibold text-xl relative">
                      ${item.price}
                    </p>
                    <MdDelete
                      onClick={() => removeItem(cart[0]._id)}
                      size={25}
                      className="absolute left-[18rem] sm:left-[30rem] md:left-[25rem] lg:left-[32rem]"
                    />
                  </p>
                  <p className="text-lg">{item.name}</p>
                  <div className="flex items-center space-x-3">
                    <button
                      className="p-2 text-yellow-50 rounded bg-yellow-
                        500"
                      onClick={() => minus(item)}
                    >
                      <HiMinusSm size={25} />
                    </button>
                    <p className="text-center text-lg sm:text-2xl">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => add(item)}
                      className="bg-yellow-500 text-yellow-50 p-2 rounded"
                    >
                      <IoAddOutline size={25} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="sm:float-right sm:w-1/2 mt-4 flex flex-col">
            <p className="flex flex-col sm:text-center sm:text-3xl text-xl font-bold">
              TOTAL
              <span>${totalPrice.toFixed(2)}</span>
            </p>
            <p className="text-base italics sm:text-lg sm:text-center">
              Delivery fees not included yet.
            </p>
            <button
              onClick={handleCheckout}
              className="py-2 px-4 bg-orange-600 mx-auto w-full sm:w-1/2  text-orange-50 rounded-md"
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
