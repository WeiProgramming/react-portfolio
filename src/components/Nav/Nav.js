import React from 'react';
import {Nav, Container} from 'react-bootstrap';
import './Nav.css';

const NavBar = () => {
    return (
        <div className="navigation">
            <Container>
                <p className="text-center mt-1 mb-1">Wei</p>
                <Nav className="justify-content-around" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default NavBar;