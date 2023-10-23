import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const poster =
  (await client.fetch) <
  groq`*[_type=='furniture']{_id,name,price, "poster": poster.asset->url}`;
