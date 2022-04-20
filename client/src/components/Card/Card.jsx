import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Row, Typography, Select, Tag} from "antd";
import moment from "moment";
import './card.css'
import axios from "axios";
import {Link} from "react-router-dom";
import {CheckCircleOutlined, SyncOutlined} from "@ant-design/icons";
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const {Text, Title} = Typography
const {Option} = Select

const CardM = ({name, step}) => {

    return (

        <Row gutter={[24,24]}>
            {
                name.map((news)=>(

                    <Col xs={24} sm={12} lg={12} key={news.id}>
                        {/*<div className={"card"}>*/}
                        <Link to={`/${news.id}`}>
                            <a href={news.url} target={"_blank"} rel={"noreferrer"}>
                                <div>
                                    {
                                        step
                                            ?
                                            <Tag className={"badge"} style={{position: "absolute"}} icon={<CheckCircleOutlined />} color="success">
                                                Опубліковано
                                            </Tag>
                                            :
                                            <Tag className={"badge"} style={{position: "absolute"}} icon={<SyncOutlined spin />} color="processing">
                                                Оброблюється
                                            </Tag>
                                    }
                                </div>
                                <div>
                                    <img style={{width: '100%', height: "300px", objectFit: "cover"}} src={news.image} alt={"news"}/>
                                    <Title level={3}>{news.name}</Title>
                                </div>
                                <div className="provider-container">
                                    <Text>{moment(news.datePublished).format('L')}</Text>
                                </div>
                            </a>
                        {/*</div>*/}
                        </Link>
                    </Col>
                ))
            }
        </Row>
    );
};

export default CardM;
