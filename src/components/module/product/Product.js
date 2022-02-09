import React, { useState } from "react";
import styled from "styled-components";
import SellProductLink from "../../../asset/product-img-example-01.jpg";

const ProductLayOut = styled.article`
  margin: 20px auto;
  width: 358px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
`;

const ProductContainer = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  overflow-x: scroll;
`;

const ProductWrapper = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

const ProductImgWrapper = styled.div`
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
`;

const ProductImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  background-color: #c4c4c4;
`;

const ProductTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 700;
`;

const TextWrap = styled.figcaption`
  padding-top: 6px;
`;

const ProductText = styled.strong`
  display: block;
  line-height: 18px;
  margin-bottom: 4px;
`;

const ProductPrice = styled.strong`
  display: block;
  font-size: 12px;
  color: #f26e22;
  font-weight: 700;
`;

const ProductList = ({ productText, productPrice }) => {
  return (
    <ProductWrapper>
      <figure>
        <ProductImgWrapper>
          <ProductImg src={SellProductLink} width="100%" />
        </ProductImgWrapper>
        <TextWrap>
          <ProductText>{productText}</ProductText>
          <ProductPrice>{productPrice}</ProductPrice>
        </TextWrap>
      </figure>
    </ProductWrapper>
  );
};

function Product() {
  return (
    <ProductLayOut>
      <ProductTitle>판매 중인 상품</ProductTitle>
      <ProductContainer>
        <ProductList
          productText={"애월읍 노지 감귤"}
          productPrice={"35,000원"}
        />
        <ProductList
          productText={"애월읍 한라봉 10kg..."}
          productPrice={"45,000원"}
        />
        <ProductList productText={"감귤 파치"} productPrice={"25,000원"} />
      </ProductContainer>
    </ProductLayOut>
  );
}

export default Product;
