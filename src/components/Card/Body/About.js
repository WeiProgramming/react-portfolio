import React from 'react';

import {Card, Container, Row, Col, Button} from 'react-bootstrap';

const About = () => {
    return (
        <Card.Body className="about-me radial-black">
            <Container>
                <Row>
                    <Col lg={5} sm={12} className="d-none d-md-block">
                        <Card style={{ width: '20rem' }} className="prof-card">
                            <Card.Img variant="top" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/69973191_2332093226839988_1363239692245401600_o.jpg?_nc_cat=104&_nc_eui2=AeFfQ_OuVmdm6WX7_1TGUJT-gE_LVbX6wzoZi3fuDkqoSwnb6uy5N1547xhV2D4ujLagMWMhmMI425li6F5GDQ50iw_JtcR3Ea0fPmcOiujotw&_nc_oc=AQkZQWQyAYuMcaFSXTSulnpPjpY8fqPedxguZzBKksH4s4W1hqdkszE2nkjLVAyr1kQ&_nc_pt=1&_nc_ht=scontent-lax3-1.xx&oh=f8828006303965137b8f560b494f2f03&oe=5E219F52" />
                            <Card.Body>
                                <Card.Title>Wei Leung</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7} sm={12} className="prof-desc">
                        <h2 className="text-center white">
                            About
                        </h2>
                        <p>
                            I strive to learn and create, my goal is to be full stack
                            developer one day. I'm a go-getter and know what I want. I enjoy
                            challenging myself everyday and being out of my comfort zone. I'm highly
                            adaptable and capable of getting work done. I enjoy helping my peers
                            and making them laugh. In my career, I've had the greatest to try out
                            and implement modern technologies for companies as well as clients. From backend
                            like Laravel to front end frameworks like Angular and React.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default About;