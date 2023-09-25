import React from "react";
import { Col } from "antd";
import ShippingIcon from "../images/truck.svg";
import FbIcon from "../images/fb.svg";
import LinkedInIcon from "../images/link.svg";
import TwitterIcon from "../images/twitter.svg";
import InstaIcon from "../images/insta.svg";
import BannerBoy from "../images/boy_bg.svg";

import {
  CustomTopRow,
  CustomLeftCol,
  CustomRowIcon,
  CustomIconCol,
  CustomA,
  FirstText,
  YearText,
  LookText,
  BannerRow
} from "./styled";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="topnav">
          <div className="container">
            <CustomTopRow>
              <CustomLeftCol>
                <CustomA
                  href="/"
                >
                  <img
                    src={ShippingIcon}
                    width={22}
                    height={25}
                    style={{ marginRight: "10px" }}
                    alt="tru"
                  />
                  Free Delivery{" "}
                </CustomA>{" "}
                <span style={{ margin: "0 10px" }}> | </span>
                <CustomA
                  href="/"
                  style={{
                    margin: "0 5px",
                  }}
                >
                  Return Policy
                </CustomA>
              </CustomLeftCol>
              <Col>
                <CustomRowIcon>
                  <CustomIconCol style={{ margin: "5px 15px" }}>
                    <CustomA
                      href="/"
                    >
                      Sign up{" "}
                    </CustomA>
                  </CustomIconCol>
                  <CustomIconCol>
                    <CustomA
                      href="/"
                    >
                      {" "}
                      Follow US{" "}
                    </CustomA>
                  </CustomIconCol>
                  <CustomIconCol>
                    <CustomA href="/">
                      <img src={FbIcon} width={7} height={15} alt="tru" />
                    </CustomA>
                  </CustomIconCol>
                  <CustomIconCol>
                    <CustomA href="/">
                      <img
                        src={LinkedInIcon}
                        width={10}
                        height={20}
                        alt="tru"
                      />
                    </CustomA>
                  </CustomIconCol>
                  <CustomIconCol>
                    <CustomA href="/">
                      <img src={TwitterIcon} width={10} height={20} alt="tru" />
                    </CustomA>
                  </CustomIconCol>
                  <CustomIconCol>
                    <CustomA href="/">
                      <img src={InstaIcon} width={10} height={20} alt="tru2" />
                    </CustomA>
                  </CustomIconCol>
                </CustomRowIcon>
              </Col>
            </CustomTopRow>
          </div>
        </div>

        <div className="main-com">
          <div className="sec-com">
            <nav class="navbar navbar-expand-lg bg-transparent">
              <div className="container">
                <a className="navbar-brand" href="/">
                  ShopKart
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        OUR PRODUCTS
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            PRODUCT1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            PRODUCT2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            PRODUCT3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container">
              <hr style={{ color: "white", border: "1px solid white" }} />
            </div>

            <div className="main-banner">
              <BannerRow>
                <Col lg={1} sm={1}>
                  <div>
                    <FirstText>
                      Fresh
                    </FirstText>
                    <br />
                    <YearText>
                      2022
                    </YearText>
                    <br />
                    <LookText>
                      Look
                    </LookText>
                  </div>
                </Col>
                <Col lg={23} sm={23}>
                  <div>
                    <img src={BannerBoy} alt="" width="100%" />
                  </div>
                </Col>
              </BannerRow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
