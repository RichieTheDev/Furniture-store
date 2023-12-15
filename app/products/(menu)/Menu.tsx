import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="px-4 sm:px-12 mb-4">
      <h1 className="h1header mt-4">All Products</h1>
      <div className="mt-2 font-semibold flex space-x-4 items-center">
        <Link href="/products" className="hover:text-amber-500 cursor-pointer">
          All
        </Link>
        <Link
          href="/products/table"
          className="hover:text-amber-500 cursor-pointer"
        >
          Tables
        </Link>
        <Link
          href="/products/lamps"
          className="hover:text-amber-500 cursor-pointer"
        >
          Lamps
        </Link>
        <Link
          href="/products/chairs"
          className="hover:text-amber-500 cursor-pointer"
        >
          Chairs
        </Link>
        <Link
          href="/products/shelves"
          className="hover:text-amber-500 cursor-pointer"
        >
          Shelves
        </Link>
        <Link
          href="/products/kitchen"
          className="hover:text-amber-500 cursor-pointer"
        >
          Kitchen
        </Link>
      </div>
    </div>
  );
};

export default Menu;
