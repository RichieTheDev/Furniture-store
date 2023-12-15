"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import useStore from "@/store/store";
import { MdDelete } from "react-icons/md";
import { CartItem } from "@/interfaces";

const CartPage = () => {
  const [all, setAll] = useState<CartItem[]>([]);
  const cart: CartItem[] = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeItem);

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
    <div className=" pb-4">
      <Navbar />
      <div className="px-4 sm:px-20">
        <p className="flex flex-col sm:justify-between items-center">
          <p className="h1header">MY BAG {cartCount}</p>
          <p>Items are reserved for 60 minutes</p>
        </p>

        <div className="mt-4 flex flex-col space-y-4 px-2 sm:px-0">
          {cart.map((item: CartItem) => (
            <div key={item._id} className="flex ">
              <Image
                src={item.poster}
                alt={item.name}
                width={250}
                height={250}
                className="lg:h-48 lg:w-48 sm:h-36 sm:w-36 h-28 w-28 object-cover rounded-md"
              />
              <div className="flex flex-col pl-4">
                <p className="flex">
                  <p className="tex-xl sm:text-2xl font-semibold">
                    ${item.price}
                  </p>
                  <MdDelete
                    onClick={() => removeItem(cart[0]._id)}
                    size={25}
                    className="ml-auto pl-48  "
                  />
                </p>
                <p className="text-xl   sm:text-3xl">{item.name}</p>
                <p className="flex text-lg sm:text-xl font-medium italic">
                  <p className="pr-2 3sm:pr-6">Black</p>

                  <label className="pr-1">QTY</label>
                  <select>
                    <option value="">1</option>
                    <option value="">2</option>

                    <option value="">3</option>
                  </select>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
