import { Row, Col, Input, Button } from "antd";
import styled from "styled-components";

export const CustomA = styled.a`
  color: #626262;
  text-decoration: none;
  :hover: white;
`;
export const CustomTopRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;
export const CustomLeftCol = styled(Col)`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #626262;
  font: Poppins;
`;
export const CustomRowIcon = styled(Row)`
  font-size: 10px;
  line-height: 15px;
  font-weight: 400;
  color: #626262;
  font: Poppins;
`;
export const CustomIconCol = styled(Col)`
  margin: 5px;
  text-decoration: none;
  color: #626262;
  font: Poppins;
`;
export const ProductTitle = styled.h3`
  color: #000000;
  font-weight: 400;
  font-family: Syne;
  marginLeft: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 40px;
    line-height: 60px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 70px;
    line-height: 88px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 90px;
  line-height: 108px;
  }
`;
export const LA = styled.li`
  list-style-type: none;
  margin: 5px 5px;
`;
export const MA = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-decoration: none;
  color: black;
  list-style-type: none;
`;
export const Newslleter = styled.h3`
  display: flex;
  justify-content: flex-start;
  font-size: 26px;
  fpnt-weight: 600;
  font-family: Syne;
  line-height: 31.2px;
  color: rgba(255, 255, 255, 0.5);
  @media only screen and (max-width: 600px) {
    display: flex;
  justify-content: center;
  }

`;
export const NewslleterText = styled.p`
  font-family: Work Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  // text-align: left;
  color: rgba(255, 255, 255, 0.5);
  @media only screen and (max-width: 600px) {
    display: flex;
  justify-content: center;
  text-align: center;
  }
`;
export const FormInput = styled(Input)`
  boredr-radius: none;
  margin: 5px;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid white;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 0 5px;
`;
export const SendButton = styled(Button)`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  background: transparent;
  height: 80px;
  padding: 20px;
  padding-top: 28px;
  border: 2px solid rgba(240, 126, 21, 1);
  color: rgba(240, 126, 21, 1);
  border-radius: 75px;
  font-weight: 500;
`;
export const CustomCRT = styled.h3`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  padding-top: 10px;
`;
export const CustomLastRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
`;
export const FirstText = styled.h3`
  color: #FFFFFF;
  font-family: Syne;
  position: absolute;
  z-index: 1;

@media only screen and (max-width: 600px) {
  font-size: 40px;
  font-weight: 800;
  line-height: 46px;
  margin-top: 3rem; 
  margin-left: 5rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size: 51px;
  font-weight: 800;
  line-height: 60px;
  margin-top: 4rem; 
  margin-left: 8rem;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  font-size: 65px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 4rem; 
  margin-left: 8rem;
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  font-size: 106px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 6rem; 
  margin-left: 9rem;
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size: 135px;
  font-weight: 800;
  line-height: 86px;
  margin-top: 8rem; 
  margin-left: 15rem;
}
`
export const YearText = styled.h3`
  font-family: Syne;
  color: #FFFFFF;
  position: absolute;
  z-index: 1;

@media only screen and (max-width: 600px) {
  font-size: 40px;
  font-weight: 800;
  line-height: 46px;
  margin-top: 4rem; 
  margin-left: 8rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size: 51px;
  font-weight: 800;
  line-height: 60px;
  margin-top: 5rem; 
  margin-left: 11rem;
}
@media only screen and (min-width: 768px) {
  font-size: 65px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 6rem; 
  margin-left: 13rem; 
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  font-size: 106px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 10rem; 
  margin-left: 18rem; 
}


@media only screen and (min-width: 1200px) {
  font-size: 135px;
  font-weight: 800;
  line-height: 86px;
  margin-left: 25rem;
  margin-top: 13rem;
}                
`
export const LookText = styled.h3` 

  font-family: Syne;
  color: #FFFFFF;
  position: absolute;
  z-index: 1; 

@media only screen and (max-width: 600px) {
  font-size: 40px;
  font-weight: 800;
  line-height: 46px;
  margin-top: 5rem; 
  margin-left: 6rem;
}
@media only screen and (min-width: 600px) {
  font-size: 51px;
  font-weight: 800;
  line-height: 60px;
  margin-top: 6rem; 
  margin-left: 9rem;
}
@media only screen and (min-width: 768px) {
  font-size: 65px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 8rem; 
  margin-left: 9rem;
}
@media only screen and (min-width: 992px) {
  font-size: 106px;
  font-weight: 800;
  line-height: 85px;
  margin-top: 14rem; 
  margin-left: 13rem; 
}
 /* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  margin-top: 19rem;
  margin-left: 18rem;
  font-size: 135px;
  font-weight: 800;
  line-height: 86px;
}                     
`;
export const BannerRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const ArrowButton = styled(Button)`
  border: none;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 50px;
  }
`;
