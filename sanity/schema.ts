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
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // will be ignored if slugify is set
            
          }
        },
        {
          name: "poster",
          type: "image",
          options: {
            hotspot: true // <-- Defaults to false
          },
          title: "Poster", // Added title for the 'poster' field
        },
        {
          name: "price",
          type: "number",
          title: "Price",
        },
      ],
    },
    {
      name: "lamp",
      title: "Lamp",
      type: "document",
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // will be ignored if slugify is set
   
          }
        },
        {
          name: "poster",
          type: "image",
          options: {
            hotspot: true // <-- Defaults to false
          },
          title: "Poster", // Added title for the 'poster' field
        },
        {
          name: "price",
          type: "number",
          title: "Price",
        },
      ],
    },
    {
      name: "table",
      title: "Table",
      type: "document",
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // will be ignored if slugify is set
   
          }
        },
        {
          name: "poster",
          type: "image",
          options: {
            hotspot: true // <-- Defaults to false
          },
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
