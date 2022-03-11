import React, {useEffect, useState} from 'react';
import CardM from "../../Card/Card";
import axios from "axios";
import Slider from "../../slider/Slider";
import {Col, Row, Typography} from "antd";
import LastNews from "../../LastNews/LastNews";
import Paginate from "../../Paginate/Paginate";
import CardForMain from "../../Card/CardForMain";
const {Text, Title} = Typography
const NewsTop = () => {

    const [name, setName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
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
        axios.get('http://localhost:3001/api/get/all')
            .then((response)=>{
                setName(response.data)
            })
    }, [])

    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    // const currentPost = name.slice(indexOfFirstPost, indexOfLastPost)
    // const paginate = (num) => setCurrentPage(num)


    return(
        <Row>

            {
                activeMenu
                    ?
                    <>
                    <Col span={16}>
                        <Slider name={name}/>
                        <div style={{marginTop: "35px"}}>
                            <a  href="/politic">
                                <Title mark >Политика</Title>
                            </a>
                        </div>
                        <CardForMain category={1}/>
                        <div style={{marginTop: "35px"}}>
                            <a  href="/society">
                                <Title mark >Общество</Title>
                            </a>
                        </div>
                        <CardForMain category={2}/>
                        <div style={{marginTop: "35px"}}>
                            <a  href="/covid">
                                <Title mark >Ковид</Title>
                            </a>
                        </div>
                        <CardForMain category={3}/>
                        <div style={{marginTop: "35px"}}>
                            <a  href="/sport">
                                <Title mark >Спорт</Title>
                            </a>
                        </div>
                        <CardForMain category={4}/>
                        <div style={{marginTop: "35px"}}>
                            <a  href="/media">
                                <Title mark >Шоу-бизнес</Title>
                            </a>
                        </div>
                        <CardForMain category={5}/>
                        {/*<div style={{textAlign: "center", marginTop: "45px"}}>*/}
                        {/*    <Paginate postsPerPage={postsPerPage} totalPosts={name.length} paginate={paginate}/>*/}
                        {/*</div>*/}

                    </Col>
                    <Col span={8} className={"column8"}>
                        <div style={{textAlign: "center"}}>
                            <Title  level={8}>Последние новости</Title>
                        </div>
                        <LastNews name={name}/>
                    </Col>
                </>
                    :
                    <Col span={24}>
                        <Slider name={name}/>
                        <div style={{marginTop: "25px"}}>
                            <a  href="/politic">
                                <Title mark >Политика</Title>
                            </a>
                        </div>
                        <CardForMain category={1}/>
                        <div style={{marginTop: "25px"}}>
                            <a  href="/society">
                                <Title mark >Общество</Title>
                            </a>
                        </div>
                        <CardForMain category={2}/>
                        <div style={{marginTop: "25px"}}>
                            <a  href="/covid">
                                <Title mark >Ковид</Title>
                            </a>
                        </div>
                        <CardForMain category={3}/>
                        <div style={{marginTop: "25px"}}>
                            <a  href="/sport">
                                <Title mark >Спорт</Title>
                            </a>
                        </div>
                        <CardForMain category={4}/>
                        <div style={{marginTop: "25px"}}>
                            <a  href="/media">
                                <Title mark >Шоу-бизнес</Title>
                            </a>
                        </div>
                        <CardForMain category={5}/>
                        {/*<div style={{textAlign: "center", marginTop: "45px"}}>*/}
                        {/*    <Paginate postsPerPage={postsPerPage} totalPosts={name.length} paginate={paginate}/>*/}
                        {/*</div>*/}

                    </Col>
            }



        </Row>
    )
};

export default NewsTop;
