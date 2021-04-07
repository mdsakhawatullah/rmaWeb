import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../Images/logo.png'


const Header = () => {

    return (
  <> 
  <div className="robot_page img-fluid">
                 <div className="fix">
            
                 <div className="header">

<header className="float-left">
    <div className="logo img-fluid">
        
        <p className="logo_p">Robo Mechatronics Association Bangladesh</p>
    </div>
</header>

<nav className="navbar navbar-expand-xl navbar-dark bg-light d-inline-block">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">EVENT</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MEMBERS
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">ADVISORY COMMITTEE</a>
                                    <a className="dropdown-item" href="#">ALUMNI MEMBERS</a>
                                    <a className="dropdown-item" href="#">COMMITTEE MEMBERS</a>
                                    <a className="dropdown-item" href="#">EXECUTIVE MEMBERS</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TUTORIALS</a>
                            </li>
                        </ul>
                    </div>
                </nav>

<div className="clearfix"></div>
</div>

            <div className="first_page_para">
                <div className="container fix first_page_para_div">
                    <p className="f_header">We are RMA</p>
                    <p className="f_para">Robo Mechatronics Association is <br/>
                        a leading Robotics Association <br/>
                        in Bangladesh. <br/>
                        We Work honestly and sorely <br/>
                        for Our Country & World.</p>
                    <button id="btn1" type="button" className="btn btn-sm btn-primary btn1"><a href="#third_page_connector">OUR
                            STORY</a></button>
                </div>
            </div>

        </div>
        </div>
        
</>
    );
};

export default Header;