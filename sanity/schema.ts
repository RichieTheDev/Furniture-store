import { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "furniture",
      title: "Furniture",
      type: "document",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "poster",
          type: "image",
          title: "Poster", // Added title for the 'poster' field
        },
        {
          name: "price",
          type: "number",
          title: "Price",
        },
      ],
    },
  ],
};
