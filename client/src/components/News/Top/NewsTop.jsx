import React, {useEffect, useState} from 'react';
import axios from "axios";
import Slider from "../../Slider/Slider";
import {Col, Row, Typography} from "antd";
import LastNews from "../../LastNews/LastNews";
import CardForMain from "../../Card/CardForMain";
import LiveNews from "../LiveNews/LiveNews";
import LastLive from "../../LastNews/LastLive";
import {ENV} from "../../env";
const {Text, Title} = Typography


const NewsTop = () => {

    const [name, setName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const [liveNews, setliveNews] = useState([]);

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
        window.scrollTo(0, 0)
        const handleResizeFunc = () =>{
            setScreenSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResizeFunc)

        handleResizeFunc()
        return () => window.removeEventListener('resize', handleResizeFunc)

    }, []);


    useEffect(()=> {
        if(screenSize < 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    }, [screenSize])


    useEffect(()=>{
        axios.get(ENV +'/api/get/all',{withCredentials: true})
            .then((response)=>{
                setName(response.data)
            })
        axios.get(ENV +'/api/get/live',{withCredentials: true})
            .then((response)=>{
                setliveNews(response.data)
            })
    }, [])

    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    // const currentPost = name.slice(indexOfFirstPost, indexOfLastPost)
    // const paginate = (num) => setCurrentPage(num)



    return(
        <Row gutter={[24,24]}>
            <Col xs={24} sm={24} lg={16}>
                <Slider name={name}/>
                <div style={{marginTop: "35px"}}>
                    <a  href="/politic">
                        <Title mark level={2}>Політика</Title>
                    </a>
                </div>
                <CardForMain category={1} />
                <div style={{marginTop: "35px"}}>
                    <a  href="/society">
                        <Title mark level={2}>Суспільство</Title>
                    </a>
                </div>
                <CardForMain category={2}/>
                <div style={{marginTop: "35px"}}>
                    <a  href="/covid">
                        <Title mark level={2}>Covid</Title>
                    </a>
                </div>
                <CardForMain category={3}/>
                <div style={{marginTop: "35px"}}>
                    <a  href="/sport">
                        <Title mark level={2}>Спорт</Title>
                    </a>
                </div>
                <CardForMain category={4}/>
                <div style={{marginTop: "35px"}}>
                    <a  href="/media">
                        <Title mark level={2}>Шоу-бізнес</Title>
                    </a>
                </div>
                <CardForMain category={5}/>
                {/*<div style={{textAlign: "center", marginTop: "45px"}}>*/}
                {/*    <Paginate postsPerPage={postsPerPage} totalPosts={name.length} paginate={paginate}/>*/}
                {/*</div>*/}

            </Col>
            <Col xs={0} sm={0} lg={8} className={"column8"}>
                <div style={{textAlign: "center"}}>
                    <Title  level={4}>LiveNews</Title>
                </div>
                <LastLive live={liveNews}/>
                <div style={{textAlign: "center", marginTop: "25px"}}>
                    <Title  level={4}>Останні новини</Title>
                </div>
                <LastNews name={name}/>
            </Col>
        </Row>
    )
};

export default NewsTop;
