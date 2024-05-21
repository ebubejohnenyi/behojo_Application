import React from 'react'
import '../../src/components/SideBar.css'
import sellerDashboard from '../assets/sellerDashboard.png';
import leadMgmt from '../assets/portfolioMgmt.png';
import navIcon from '../assets/navIcon.png';
import sellerProfile from '../assets/sellerProfile.png';
import trophy from '../assets/trophy.png';

import {NavLink } from 'react-router-dom';
export default function SideBar() {

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
                <div className='side-nav'>
                    <div className="side-nav-content">
                        <h3>Logo <span>PlaceHolder</span></h3>
                        <div>
                            <ul>
                                <NavLink
                                    to="/seller-dashboard"
                                    style={isActive => ({
                                        background: isActive ? "rgba(255, 0, 0, 0.106)" : "blue"
                                    })}>
                                    <img src={sellerDashboard} alt="Seller Dashboard" />Dashboard
                                </NavLink>
                                <NavLink
                                    to='/lead-management'
                                    style={isActive => ({
                                        background: isActive ? "" : "blue"
                                    })}>
                                    <img src={leadMgmt} alt="Lead Mgmt" />Lead Mgmt
                                </NavLink>
                                <NavLink
                                    to='/portfolio-management'
                                    style={isActive => ({
                                        background: isActive ? "" : "blue"
                                    })}>
                                    <img src={navIcon} alt="Portfolio Managment" />Portfolio Mgmt
                                </NavLink>
                                <NavLink
                                    to='/seller-profile'
                                    style={isActive => ({
                                        background: isActive ? "" : "blue"
                                    })}>
                                    <img src={sellerProfile} alt="Profile Setting" />Profile
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='campaign'>
                            <div>
                                <img src={trophy} alt="Campaign" />
                            </div>
                            <h3>Create a Campaign</h3>
                            <p>Create an ad campaign <br /> to reach more users</p>
                            <button>Create Now</button>
                        </div>
                    </div>
                </div>
        </div >
    )
}
