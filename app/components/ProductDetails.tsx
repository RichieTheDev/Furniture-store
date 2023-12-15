"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "../products/(menu)/Menu";
import toast, { Toaster } from "react-hot-toast";
import useStore from "@/store/store";


const ProductDetails = ({ table }: any) => {
  const [color, setColor] = useState("Black");
  const handleColor = (selectedColor: any) => {
    setColor(selectedColor);
  };
  const add = useStore((state) => state.add);
  const notify = () => toast.success("Added to Cart");

  return (
    <>
      <Navbar />
      <Menu />
      <div className="mt-4 px-4 sm:px-12">
        <div className="flex flex-col sm:flex-row  gap-4">
          <Image
            src={table.poster}
            alt=""
            width={350}
            height={350}
            className="sm:w-[35vw] lg:w-[45vw] h-[35vh] w-screen lg:h-[50vh] sm:h-[45vh] rounded-lg object-cover"
          />
          <div className="flex flex-row sm:flex-col sm:space-x-0 space-x-4 sm:space-y-4">
            <Image
              src={table.poster}
              alt=""
              width={250}
              height={250}
              className="sm:w-[17vw] lg:w-[10vw] h-[10vh] w-[28vw] rounded-md object-cover"
            />
            <Image
              src={table.poster}
              alt=""
              width={250}
              height={250}
              className="sm:w-[17vw] lg:w-[10vw] h-[10vh] w-[28vw] rounded-md object-cover"
            />
            <Image
              src={table.poster}
              alt=""
              width={250}
              height={250}
              className="sm:w-[17vw] lg:w-[10vw] h-[10vh] w-[28vw] rounded-md object-cover"
            />
          </div>
          <div className="lg:w-[45vw]">
            <h1 className="h1header">{table.name}</h1>
            <p className="pt-3 sm:pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, assumenda.
            </p>
            <p className="pt-2 sm:pt-3">
              <strong>Facade material: </strong>
              Lorem ipsum
            </p>
            <p className="pt-1 sm:pt-2">
              <strong>Coverage: </strong>
              Lorem
            </p>
            <p className="border-t border-gray-400 mt-3 mb-3"></p>
            <strong>Specifications: {color}</strong>
            <p className="border-t border-gray-400 mt-3"></p>
            <div className="flex space-x-4">
              <div className="space-x-2">
                <input
                  type="radio"
                  name="color"
                  value="Black"
                  onChange={() => handleColor("Black")}
                  checked={color === "Black"}
                />
                <label>Black</label>
              </div>

              <div className="space-x-2">
                <input
                  type="radio"
                  name="color"
                  value="White"
                  onChange={() => handleColor("White")}
                  checked={color === "White"}
                />
                <label>White</label>
              </div>

              <div className="space-x-2">
                <input
                  type="radio"
                  name="color"
                  value="Beige"
                  onChange={() => handleColor("Beige")}
                  checked={color === "Beige"}
                />
                <label>Beige</label>
              </div>
            </div>
            <div className="mt-4 flex flex-col ">
              <strong className="text-xl sm:text-2xl">${table.price}</strong>
              <button
                onClick={() => {
                  add(table);
                  notify();
                }}
                className="mt-4 sm:px-14 rounded-md text-white py-2 bg-black"
              >
                Add to cart
              </button>
              <Toaster
                toastOptions={{
                  success: {
                    duration: 2000,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
