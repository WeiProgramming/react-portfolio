import React from 'react';
import './Landing.css';
import {Badge} from 'react-bootstrap';

const Landing = () => {
    return (
        <div className="landing">
            <div className="overlay"></div>
            <div className="description-box">
                <h1>Wei | Programming <Badge variant="secondary">DEV</Badge></h1>
                <p>Passion . Reality . Creation</p>
            </div>
        </div>
    );
}

export default Landing;