import React from 'react'
import { Row, Col } from 'antd';
import { Newslleter, NewslleterText, FormInput, SendButton, CustomCRT, CustomLastRow } from './styled';
import FooterTextImg from '../images/footerText.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className='sec-footer container'>
          <div>
            <Row style={{display: 'flex'}}>
              <Col lg={6} style={{ marginTop: '40px' }}>
                <Newslleter>Newslleter</Newslleter>
                <NewslleterText>Get news about articles and updates in your inbox.</NewslleterText>
              </Col>
              <Col lg={4}></Col>
              <Col lg={12} style={{ marginTop: '40px' }}>
                <div className="input-group mb-3">
                  <lable style={{ marginTop: '5px', color: 'rgba(255, 255, 255, 0.5)' }}>NAME</lable>
                  <FormInput type="text" name="email" />
                  <lable style={{ marginTop: '5px', color: 'rgba(255, 255, 255, 0.5)' }}>EMAIL</lable>
                  <FormInput type="email" name="email" />
                  <lable style={{ marginTop: '5px', color: 'rgba(255, 255, 255, 0.5)' }}>MESSAGE</lable>
                  <FormInput type="text" name="email" />
                </div>
                <Row>
                  <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                    <SendButton>SEND</SendButton>
                  </Col>
                </Row>

              </Col>
            </Row>
          </div>
          <div className='footerText' >
            <Row>
              <Col>
                <img src={FooterTextImg} alt='..' height={300} width='100%' />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="footer-Bottom">
        <CustomLastRow>
          <Col><CustomCRT>Copyright 2022 All Right Reserved By SG</CustomCRT></Col>
        </CustomLastRow>
      </div>
    </div>
  )
}

export default Footer;
