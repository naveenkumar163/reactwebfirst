import React from 'react'
import { Row, Col } from 'antd';
import ArrowIcon from "../images/arrowIcon.svg";

const ProductCard = (data) => {
    console.log("datas==", data)
    return (
        <div>
            <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                <Col lg={7} style={{margin: '5px'}}>
                    <div className="card" style={{ width: '17rem' }}>
                        <img src={data?.data?.[0]?.image} className="card-img-top" alt="..." height={160} />
                        <img src={ArrowIcon} alt='..' height={30} width={30} style={{position: 'absolute', top: '8rem', right: '5px'}} />
                        <div className="card-body">
                            <h5 className="card-title">{data?.data?.[0]?.title.slice(0, 35)}...</h5>
                            <p className="card-text">{data?.data?.[0]?.description.slice(0, 90)}..</p>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>${data?.data?.[0]?.price}</span>
                        </div>
                    </div>
                </Col>
                <Col lg={7} style={{margin: '5px'}}>
                    <div className="card" style={{ width: '17rem' }}>
                        <img src={data?.data?.[1]?.image} className="card-img-top" alt="..." height={160} />
                        <img src={ArrowIcon} alt='..' height={30} width={30} style={{position: 'absolute', top: '8rem', right: '5px'}} />
                        <div className="card-body">
                            <h5 className="card-title">{data?.data?.[1]?.title.slice(0, 35)}...</h5>
                            <p className="card-text">{data?.data?.[1]?.description.slice(0, 90)}...</p>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>${data?.data?.[1]?.price}</span>
                        </div>
                    </div>
                </Col>
                <Col lg={7} style={{margin: '5px'}}>
                    <div className="card" style={{ width: '17rem' }}>
                        <img src={data?.data?.[2]?.image} className="card-img-top" alt="..." height={160} />
                        <img src={ArrowIcon} alt='..' height={30} width={30} style={{position: 'absolute', top: '8rem', right: '5px'}} />
                        <div className="card-body">
                            <h5 className="card-title">{data?.data?.[2]?.title.slice(0, 35)}...</h5>
                            <p className="card-text">{data?.data?.[2]?.description.slice(0, 90)}...</p>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>${data?.data?.[2]?.price}</span>
                        </div>
                    </div>
                </Col>
            </Row>


            <br />
        </div>
    )
}

export default ProductCard;
