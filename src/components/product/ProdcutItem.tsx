import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

type ProductItemProps = {
  product: Product;
};

const ProdcutItem = ({ product }: ProductItemProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative">
      <div className="absolute top-2 right-2 z-10">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
          HOT!
        </span>
      </div>

      <div className="relative h-48 w-full">
        {product.image && (
          <Image
            src={urlFor(product.image).width(256).url()}
            alt={product.title || "Product Image"}
            fill
            className="object-contain p-2"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1">
          {product.title}
        </h3>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">
              Rp. {(product.price || 0).toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              Rp. {((product.price || 0) * 5).toFixed(2)}
            </span>
          </div>

          <div className="text-xs text-gray-500 font-semibold mb-2">
            🔥{" "}
            {100 +
              Math.abs(
                product._id
                  .split("")
                  .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 500
              )}{" "}
            sold in last 24h
          </div>
          <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
            Buy Now!
          </button>
          <div className="text-xs font-semibold text-red-500 text-center mt-1 animate-pulse">
            ⚡ Limited Time Offer!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutItem;
