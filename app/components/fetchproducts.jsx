import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchProducts = async () => {
  const data = await client.fetch(
    groq`*[_type=='furniture' || _type=='lamp' || _type=='table']{_id,name,price, "poster": poster.asset->url,"slug": slug.current}`,
  );

  return data;
};
