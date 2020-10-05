import React, { useState } from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { Card, Container, Row, Col, Button, Tabs, Tab, } from 'react-bootstrap';
import PersonalImages from '../../../assets/personalImages';
import './About.scss';

const About = () => {
    let [currentBackground, setCurrentBackground] = useState('stocks-bg');
    return (
        <Card.Body className={`about-me bg ${currentBackground}` }>
            <div className={"about-me-overlay"}></div>
            <Container>
                <Row>
                    <Col lg={5} sm={12} className="d-none d-md-block">
                        <Card style={{ width: '20rem' }} className="prof-card">
                            <Card.Body>
                                <Card.Title>Wei Leung</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Img variant="top" src={PersonalImages.Selfie} />
                                <Row className="about-icons">
                                    <Col lg={4} md={4} sm={4}>
                                        <Button className="inner-btn"><AiFillGithub /></Button>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Button className="inner-btn"><AiOutlineTwitter /></Button>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                       <Button className="inner-btn"><AiFillLinkedin /></Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7} sm={12} className="prof-desc about-me-tab-container white">
                        <h2 className="text-center about-me-tab-title">
                            About Me
                        </h2>
                        <Tabs
                            defaultActiveKey="stocks-bg"
                            id="uncontrolled-tab-example"
                            className="about-me-tabs"
                            onSelect={(eventKey) => {
                                setCurrentBackground(eventKey);
                            }}
                        >
                            <Tab eventKey="stocks-bg" title="Stocks">
                                <p>
                                    The idea of investing came in mind when I wanted to find a way to become financially free in the future, the thought of passive income and financial growth
                                    was very interesting to me. I began my investing during my second year of college, just like anyone else, I was naive and got enticed to the "get rich quick" 
                                    scheme. Jumped into penny stocks and lost 2/3s of my capital so that's when I gave up on that and decided to put the rest of my money into crypto currency 
                                    because during this time, bitcoin began to boom.

                                    I put what's left of the last of the 1/3 into an altcoin called <a href="https://litecoin.org/" aria-label="litecoin link">Litecoin</a>, 
                                    I figured that since bitcoin was booming, that the other altcoins would soon follow. So I made that investment, and decided to just let that money
                                    sit there and put it ready to lose. Needless to say, my prediction of altcoins following bitcoin was correct, and my investments grew 1900%! That's 
                                    when it kickstarted my love and importance of understanding finance and investments. 

                                    As of now, I like to swing and day trade on my free time while the market is open. I base most of my trades with technical analysis strategies on 
                                    various stocks and forex markets in the US.
                                </p>
                            </Tab>
                            <Tab eventKey="programming-bg" title="Coding">
                                <p>
                                    I strive to learn and create, my goal is to be full stack
                                    developer one day. I'm a go-getter and know what I want. I enjoy
                                    challenging myself everyday and being out of my comfort zone. I'm highly
                                    adaptable and capable of getting work done. I enjoy helping my peers
                                    and making them laugh. In my career, I've had the greatest to try out
                                    and implement modern technologies for companies as well as clients. From backend
                                    like Laravel to front end frameworks like Angular and React.
                                </p>
                            </Tab>
                            <Tab eventKey="boxing-bg" title="Boxing">
                                <p>
                                    I joined a boxing gym doing both classes and personal workouts. I've been boxing since August 2020
                                    For me, boxing has been a good sport to help promote both a healthy mind and physical lifestyle.
                                </p>
                            </Tab>
                            <Tab eventKey="foody-bg" title="Foody">
                                <p>
                                    Food speaks a thousand words, I love to try different types of food for their taste. When I find a monthly favorite,
                                    you can find me try different spot around the city looking for what I believe is the best tasting of that kind.
                                    My recent favorite has been <a href="https://onolicioushawaii.com/what-is-poke/" aria-label="poke link">Poke</a>.
                                    Which I proceeded to research different hot poke spots through yelp, tried about 7 different before I could find the best
                                    location that resembled that of authentic Hawaiian poke. Don't worry, I've already done the travelling and research
                                    and the restaurant is called <a href="https://www.yelp.com/biz/its-raw-poke-shop-san-diego" aria-label="it's raw poke link">It's Raw</a>.
                                    You can thank me later.
                                </p>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default About;