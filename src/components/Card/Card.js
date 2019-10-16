import React from 'react';
import {Card, Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import './Card.css';
import CompanyCardBody from './Body/Companies';
import About from './Body/About';
import Skills from './Body/Skills';
import Contact from './Body/Contact';

import wave from '../../assets/wave-blue.svg';

const CardItem = () => {
    return (
        <Card className="card-main">
            <CompanyCardBody/>
            <img src={wave} alt={wave} className="img-fluid"/>
            <About/>
            <Skills/>
            <Contact/>
        </Card>
    )
}

export default CardItem;