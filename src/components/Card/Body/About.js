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
                                        <Button className="outer-btn"><Button className="inner-btn"><AiFillGithub /></Button></Button>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Button className="outer-btn"><Button className="inner-btn"><AiOutlineTwitter /></Button></Button>
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Button className="outer-btn"><Button className="inner-btn"><AiFillLinkedin /></Button></Button>
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
                                    I strive to learn and create, my goal is to be full stack
                                    developer one day. I'm a go-getter and know what I want. I enjoy
                                    challenging myself everyday and being out of my comfort zone. I'm highly
                                    adaptable and capable of getting work done. I enjoy helping my peers
                                    and making them laugh. In my career, I've had the greatest to try out
                                    and implement modern technologies for companies as well as clients. From backend
                                    like Laravel to front end frameworks like Angular and React.
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
                                    I strive to learn and create, my goal is to be full stack
                                    developer one day. I'm a go-getter and know what I want. I enjoy
                                    challenging myself everyday and being out of my comfort zone. I'm highly
                                    adaptable and capable of getting work done. I enjoy helping my peers
                                    and making them laugh. In my career, I've had the greatest to try out
                                    and implement modern technologies for companies as well as clients. From backend
                                    like Laravel to front end frameworks like Angular and React.
                                </p>
                            </Tab>
                            <Tab eventKey="foody-bg" title="Foody">
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
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default About;