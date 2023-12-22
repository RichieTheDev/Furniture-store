"use client";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchproducts = async () => {
  const data = await client.fetch(
    groq`*[_type=='table' || _type=='furniture' || _type=='lamp' || _type=='seats' || _type=='kitchen' || _type=='shelve']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );

  return data;
};
