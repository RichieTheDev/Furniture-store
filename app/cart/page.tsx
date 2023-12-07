'use client'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import useStore from "@/store/store";

const CartPage = () => {
  const [all, setAll] = useState([]);
  const cart = useStore((state) => state.cart);
  const add = useStore((state) => state.add);
  const minus = useStore((state) => state.minus);

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

  const cartCount = cart.reduce((total, cartItem) => {
    const foundItem = all.find((item) => item._id === cartItem._id);
    return total + (foundItem ? cartItem.quantity : 0);
  }, 0);

  return (
    <div className="">
      <Navbar />
      <div className="px-4 sm:px-12">
        <h1 className="h1header">Cart {cartCount}</h1>

        <div className="flex flex-col justify-center mx-auto items-center space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex">
              <Image
                src={item.poster}
                alt={item.name}
                width={250}
                height={250}
                className="sm:h-[70%] h-28 w-28 object-cover rounded-xl"
              />
              {/* <div className="flex flex-col sm:pt-10 lg:pt-20 ">
                <p className="font-semibold text-3xl flex items-center truncate">
                  <p>
                    {item.name}
                    <span className="flexprice" >${item.price}</span>
                  </p>
                </p>
                
                <button className="border px-4 py-2 border-white bg-black rounded-md text-white">
                  Add
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
