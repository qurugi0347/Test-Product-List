import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {IProductData} from "api/sample";
import productImage from "api/images/product.jpeg";
import usePastTime from "hooks/usePastTime";

interface ProductItemProps {
  data: IProductData;
}

const ProductListItem = ({
  data: {id, price, title, brand},
}: ProductItemProps) => {
  const navigate = useNavigate();
  return (
    <ProductWrapper
      onClick={() => {
        navigate(`/product?id=${id}`);
      }}>
      <ImageWrapper>
        <ProductImage src={productImage} />
      </ImageWrapper>
      <InfoSection>
        <Price>{Math.floor(price / 10000)}만원</Price>
        <Brand>{brand}</Brand>
        <Title>{title}</Title>
        <DocumentInfo>
          {usePastTime("2022-03-26 18:00:00")} · 마포구 망원동
        </DocumentInfo>
      </InfoSection>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 112px 1fr;
  grid-gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
`;

const ImageWrapper = styled.div`
  padding-top: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  object-fit: cover;
`;

const InfoSection = styled.div`
  position: relative;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--black);
`;

const Brand = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--gray2);
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: var(--gray1);
`;

const DocumentInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--gray3);
  position: absolute;
  bottom: 0;
`;

export default ProductListItem;
