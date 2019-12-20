import React from 'react';
import {Card, Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap';

import Logos from '../../../assets/logos';

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Content>
    </Popover>
);

const Skills = () => {
    return (
        <Card.Body className="skills">
            <Container>
                <Row>
                    <Col md={6} className="prof-desc">
                        <div className="section-header">
                            <h2 className="text-center">
                                Passion
                            </h2>
                            <p>
                                I'm passionate with development and learning
                                new skills to utilize in the my to day life.
                                An eye for detail clean and clear code is what I
                                strive for. Below are the frameworks and libraries I've
                                used for work and client projects.
                            </p>
                        </div>
                        <Row>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.angular} alt={Logos.angular}/>
                            </Col>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.bootstrap} alt={Logos.bootstrap}/>
                            </Col>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.html} alt={Logos.html}/>
                            </Col>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.laravel} alt={Logos.laravel}/>
                            </Col>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.nodejs} alt={Logos.nodejs}/>
                            </Col>

                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.react} alt={Logos.react}/>
                            </Col>
                            <Col md={4} className="company-card">
                                    <img className="img-fluid" src={Logos.sass} alt={Logos.sass}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className="image-floater d-none d-md-block">
                            <img src="https://demos.creative-tim.com/get-shit-done-pro/assets/img/presentation/perspective_cards.png"
                                 alt="image floater"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default Skills;