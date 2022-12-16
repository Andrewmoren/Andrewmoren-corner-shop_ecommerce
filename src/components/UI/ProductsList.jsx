import React from "react";

import ProductCard from "./ProductCard";

const ProductsList = ({ data, index }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
