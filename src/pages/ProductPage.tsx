import React, {useState, useEffect, useMemo} from "react";
import styled from "styled-components";

import {getProductDetail, IProductData} from "api/sample";

import BaseLayout from "components/layout/base/BaseLayout";
import productImage from "api/images/product.jpeg";
import ProductImage from "components/ProductPage/ProductImage";
import ProductInfo from "components/ProductPage/ProductInfo";
import RandomProductButton from "components/ProductPage/RandomProductButton";

import getRandomProductIdx from "util/getRandomProductIdx";
import {
  appendRecentProductId,
  getRecentProductIds,
} from "util/manageRecentProduct";

const ProductPage = () => {
  const [productId, setProductId]: [number, any] = useState(
    getRandomProductIdx(),
  );
  const [productDetail, setProductDetail]: [IProductData | null, any] =
    useState(null);

  const getProductData = async (id: number) => {
    const productDetailInfo = await getProductDetail(id);
    setProductDetail(productDetailInfo);
    appendRecentProductId(id);
  };

  const shuffleProductId = () => {
    setProductId((prevId: number) => getRandomProductIdx(prevId));
  };

  useEffect(() => {
    // 현재 화면 날리고
    setProductDetail(null);
    // 데이터 로드
    getProductData(Number(productId));
  }, [productId]);

  return (
    <BaseLayout>
      {useMemo(() => {
        if (productDetail) {
          return (
            <>
              <ProductImage src={productImage} />
              <ProductDetailWrapper>
                <ProductInfo {...productDetail} />
                <RandomProductButton onClickButton={shuffleProductId} />
              </ProductDetailWrapper>
            </>
          );
        }
        return <div>로딩중</div>;
      }, [productDetail])}
    </BaseLayout>
  );
};

const ProductDetailWrapper = styled.div`
  padding: 0 20px;
`;

export default ProductPage;
