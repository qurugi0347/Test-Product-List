import React from "react";
import styled from "styled-components";
import {IProductData} from "api/sample";

import ProductListItem from "./ProductListItem";

interface ProductListProps {
  data: IProductData[];
}

const ProductList = ({data: productList}: ProductListProps) => {
  return (
    <ProductListWarpper>
      {productList.map((product) => {
        return <ProductListItem data={product} />;
      })}
    </ProductListWarpper>
  );
};

const ProductListWarpper = styled.div`
  padding: 0 20px;
`;

export default ProductList;
