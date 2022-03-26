import React, {useState, useEffect, useMemo} from "react";
import styled from "styled-components";
import queryString from "query-string";

import {getProductDetail, IProductData} from "api/sample";

import BaseLayout from "components/layout/base/BaseLayout";
import productImage from "api/images/product.jpeg";
import ProductImage from "components/ProductPage/ProductImage";
import ProductInfo from "components/ProductPage/ProductInfo";
import RandomProductButton from "components/ProductPage/RandomProductButton";

import getRandomProductIdx from "util/getRandomProductIdx";
import {appendRecentProductId} from "util/manageRecentProduct";

const ProductPage = () => {
  const queryData = queryString.parse(window.location.search);
  const defaultProductId = useMemo(() => {
    if (Number.isNaN(Number(queryData.id))) {
      return getRandomProductIdx();
    }
    return Number(queryData.id);
  }, []);

  const [productId, setProductId]: [number, any] = useState(defaultProductId);
  const [productDetail, setProductDetail]: [IProductData | null, any] =
    useState(null);

  const getProductData = async (id: number) => {
    const productDetailInfo = await getProductDetail(id);
    if (!productDetailInfo) {
      alert("상품을 찾을 수 없습니다.");
    }
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
