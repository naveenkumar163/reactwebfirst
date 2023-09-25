import { Row, Col } from "antd";
import { ProductTitle, MA, LA, ArrowButton } from "./styled";
import ProductCard from "./productCard";
import React, { useEffect, useState } from "react";
import LeftArrow from "../images/leftArrow.svg";
import RightArrow from "../images/rightArrow.svg";
import StarLine from "../images/starLine.svg";

const Product = () => {
  const [productItems, setProductItems] = useState("");

  useEffect(() => {
    productDetails();
    // productData()
  }, []);

  const productDetails = async () => {
    const url = `https://fakestoreapi.com/products`;
    let data = await fetch(url);
    let parseData = await data.json();
    setProductItems(parseData);
  };

  return (
    <div className="container" style={{ minHeight: "35rem" }}>
      <div className="title">
        <Row>
          <Col lg={20} md={18} sm={16}>
            <ProductTitle>New Products</ProductTitle>
            <img src={StarLine} alt='...' style={{position: 'absolute', bottom: '10px', width: '60%', minWidth: '250px'}}/>
          </Col>
          <Col lg={4} md={6} sm={8} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <ArrowButton>
              <img src={LeftArrow} alt=".." />
            </ArrowButton>
            <ArrowButton>
              <img src={RightArrow} alt=".." />
            </ArrowButton>
          </Col>
        </Row>

        {/* <hr /> */}
      </div>

      <div className="menu">
        <Row>
          <Col lg={4} md={4} sm={22}>
            <LA>
              <MA href="/">Apparel</MA>
            </LA>
            <LA>
              <MA href="/">Accessories</MA>
            </LA>
            <LA>
              <MA href="/">Best sellers</MA>
            </LA>
            <LA>
              <MA href="/">50% off</MA>
            </LA>
          </Col>
          <Col lg={20} md={20} sm={22}>
            <ProductCard data={productItems} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
