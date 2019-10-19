import React from 'react';
import {Card, Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'


import CompanyImages from '../../../assets/companyImages';

import {CostcoPopover, SwiftChangePopover, SmartPropertyPopover, RightDevicePopover} from "../../Popovers/Company/Company";

const CompanyCardBody = () => {


    return (
        <Card.Body className="companies">
            <Container>
                <Row>
                    <div className="section-header text-center">
                        <h2 className="text-center">
                            Companies Shape Experiences
                        </h2>
                        <p>
                            Proud to have taken the opportunity to have taken part
                            in contributing to the growth of these companies and grow alongside them
                        </p>
                    </div>
                </Row>
                <Row>
                    <Col md={3}>
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={CostcoPopover}>
                            <Card className="company-card">
                                <img className="img-fluid" src={CompanyImages.CostcoAuto} alt={CompanyImages.CostcoAuto}/>
                            </Card>
                        </OverlayTrigger>
                    </Col>
                    <Col md={3} className="company-card">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={RightDevicePopover}>
                            <Card>
                                <img className="img-fluid" src={CompanyImages.RightDevice} alt={CompanyImages.RightDevice}/>
                            </Card>
                        </OverlayTrigger>
                    </Col>

                    <Col md={3} className="company-card">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={SmartPropertyPopover}>
                            <Card>
                                <img className="img-fluid" src={CompanyImages.SmartProperty} alt={CompanyImages.SmartProperty}/>
                            </Card>
                        </OverlayTrigger>
                    </Col>
                    <Col md={3} className="company-card">
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={SwiftChangePopover}>

                            <Card>
                                <img className="img-fluid" src={CompanyImages.SwiftChange} alt={CompanyImages.SwiftChange}/>
                            </Card>
                        </OverlayTrigger>

                    </Col>
                </Row>
            </Container>
        </Card.Body>
    )
}

export default CompanyCardBody;