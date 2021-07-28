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
                                    I started my first brokerage account in 2015 and I've been trading different areas of the market from stocks to crypto currency. My obsession with "building wealth through other means" has always driven me, so it's no surprise that day one for me was all about looking at graphs and charts on a screen.
                                </p>
                            </Tab>
                            <Tab eventKey="programming-bg" title="Coding">
                                <p>
I knew I wanted to be a computer programmer from the time in elementary school when my dad brought home our first PC. Now, as an adult with more than 10 years of programming experience under my belt and a degree in Computer Science Engineering Techology, nothing has changed about how much enjoyment it provides me; if anything that feeling just grows stronger each day.

I was always fascinated by computers at an early age because they represented freedom--the ability for humans to create whatever we can imagine without limitations or boundaries set on us by other people's rules--so naturally once college rolled around this interest became even greater and inspired one of the most life-changing decisions I've ever made: The decision to major in computer science so that someday soon enough                                </p>
                            </Tab>
                            <Tab eventKey="boxing-bg" title="Boxing">
                                <p>
                                    Boxing has always been a sport that I loved both playing and watching. For me, boxing is an excellent way to achieve my goals of "healthy mind and physical lifestyle."

I joined the gym in August 2020 doing both classes and personal workouts for myself. My favorite thing about it so far has been how many different types of people are there: from kids as young as six years old who just love learning new moves or getting their energy out, to adults looking for some friendly competition with other like-minded athletes!
                                </p>
                            </Tab>
                            <Tab eventKey="foody-bg" title="Foody">
                                <p>
                                    You know you're a foodie when it's not enough to try just one place. The search for the next best bite is constantly on your mind as new monthly favorites come and go, waiting impatiently until they can find that perfect taste again.
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