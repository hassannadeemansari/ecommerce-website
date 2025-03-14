// src/app/Ceramics/page.tsx

import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/querries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Ceramics = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col">
      <h2 className="text-3xl font-sans">New Ceramics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-semibold">{product.title}</h3>
            {product.productImage && (
              <Image
                src={urlFor(product.productImage).url()} // Ensure this generates a valid URL
                alt={product.title}
                width={240}
                height={240}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>

            <button className="bg-gradient-to-r from-primary to-blue-300 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ceramics;