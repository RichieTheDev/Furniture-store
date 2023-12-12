// Products.js
import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Menu from "../(menu)/Menu";

const Products = async ({ _id }: any) => {
  // Fetch table data from the Sanity CMS
  const table = await client.fetch(
    groq`*[_type=='table']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );

  return (
    <div>
      <Navbar/>
      <Menu />
      <div className="px-3 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {table.map((product: any) => (
          <Link key={product._id} href={`/products/${product.slug}`}>
            <p>
              <Image
                src={product.poster}
                width={350}
                height={300}
                alt={product.name}
                className="bigimage"
              />
              <p className="flexname">{product.name}</p>
              <p className="flexprice">${product.price}</p>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
