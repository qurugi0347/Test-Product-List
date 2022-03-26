import React from "react";
import styled from "styled-components";

import {IProductData} from "api/sample";
import usePastTime from "hooks/usePastTime";

const ProductInfo = ({brand, price, title}: IProductData) => {
  return (
    <InfoWrapper>
      <BrandName>{brand}</BrandName>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>
        {Math.floor(price / 10000).toLocaleString()}만원
      </ProductPrice>
      <DocumentInfo>
        {usePastTime("2022-03-26 18:00:00")} · 마포구 망원동
      </DocumentInfo>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const BrandName = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--gray2);
`;

const ProductTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: var(--gray1);
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: var(--gray1);
`;

const DocumentInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--gray3);
`;

export default ProductInfo;
