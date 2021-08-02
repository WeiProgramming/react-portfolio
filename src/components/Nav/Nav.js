import React from 'react';
import './Nav.scss';
import companyLogo from '../../assets/logo/weibsite-logo.png'

const NavBar = () => {
    return (
        <div className="navigation">
            <div className="navigation__logo-container">
                <img src={companyLogo} className="navigation__logo" />
            </div>
            <div className="navigation__links">
                <div className="navigation__link">Home</div>
            </div>
        </div>
    )
}

export default NavBar;