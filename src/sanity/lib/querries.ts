// export const allProducts = `
//   *[_type == "product"]{
//     _id,
//     title,
//     "slug": slug.current, // Ensure slug is fetched properly
//     productImage,
//     price
//   }
// `;


import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`