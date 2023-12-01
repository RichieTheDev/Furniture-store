// Page.tsx
import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import Allproducts from "@/app/components/Allproducts";

export interface idprops {
  params: {
    name: string;
    slug: string;
    image:string;
    price:number;
  };
}
export interface props {
  name: string;
  poster: string;
}

async function getData(slug: string) {
  const query = `
  *[
    (_type=='table' || _type=='furniture' || _type=='lamp') &&
    slug.current == "${slug}"
  ][0]{
    _id,
    name,
    price,
    "poster": poster.asset->url,
    "slug": slug.current
  }
`;


  const data = await client.fetch(query);
  return data;
}

const productPage = async ({ params }: idprops) => {
  const table: props = await getData(params.slug);
 
  return (
    <div>
      <ProductDetails table={table}  /> 
    </div>
  );
};

export default productPage;
