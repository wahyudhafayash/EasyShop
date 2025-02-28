import ProductItem from "@/components/product/ProdcutItem";
import { Product } from "@/sanity.types";
import React from "react";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
