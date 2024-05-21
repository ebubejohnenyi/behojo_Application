import React from 'react';
import '../../styles/sellerDashboardCss/portfolioMgmt.css';
import sellerDashboard from '../../assets/sellerDashboard.png';
import leadMgmt from '../../assets/portfolioMgmt.png';
import navIcon from '../../assets/navIcon.png';
import sellerProfile from '../../assets/sellerProfile.png';
import search_Img from '../../assets/search.png';
import pen_Img from '../../assets/pen_writing.png';
import down from '../../assets/down.png';
import delete_Img from '../../assets/delete.png';
import dropDown_Img from '../../assets/dropdown.png';
import trophy from '../../assets/trophy.png';
import customer_service from '../../assets/headphone.png';
import down_red_arrow from '../../assets/red_long_arrow.png';
import square from '../../assets/square.png';
import world from '../../assets/world.png';
import med_doctor from '../../assets/med-doctor.png';
import eye from '../../assets/eye.png';
import bookmark from '../../assets/bookmark.png';
import phone from '../../assets/phone.png';
import click from '../../assets/click.png';
import pharmacy from '../../assets/pharmacy.png'

import Header from '../../components/Header';

import { NavLink } from 'react-router-dom';

export default function PortfolioMgmt() {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="portfolio-container">
                <div className='portfolio-side-nav'>
                    <div className="portfolio-screen-side-nav-content">
                        <h3>Logo <span>PlaceHolder</span></h3>
                        <div>
                            <ul>
                                <NavLink
                                    to="/seller-dashboard"
                                    style={isActive => ({
                                        background: isActive ? "" : "blue"
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
                                        background: isActive ? "rgba(255, 0, 0, 0.106)" : "blue"
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
                        <div className='portfolio-campaign'>
                            <div>
                                <img src={trophy} alt="Campaign" />
                            </div>
                            <h3>Create a Campaign</h3>
                            <p>Create an ad campaign <br /> to reach more users</p>
                            <button>Create Now</button>
                        </div>
                    </div>

                </div>
                <div className='p-main-nav'>
                    <div id='port-header-container'>
                        <Header />
                    </div>
                    <div>
                        <div className="port-container">
                            <h2>Profile Managment</h2>
                            <div className="port-title-content">
                                <p>Showing <span>20 <img src={down} alt="Drop Down" /> </span> Entries</p>
                                <div className="port-btn-side">
                                    <div>
                                        <img src={search_Img} alt="Search" />
                                        <input type="search" placeholder="Search" />
                                    </div>
                                    <button>Add new Doctor / Hospital</button>
                                    <button><img src={down_red_arrow} alt="Down" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="port-table-container">
                            <div>
                                <div>
                                    <img src={med_doctor} alt='Doctor' />
                                    <p>#12 Doctors served</p>
                                </div>
                                <div>
                                    <img src={pharmacy} alt='Doctor' />
                                    <p>#2 Hospital served</p>
                                </div>
                                <div>
                                    <img src={world} alt='Clock' />
                                    <p>#2 Countries served</p>
                                </div>
                            </div>
                            <table className='p-table'>
                                <tr>
                                    <th>
                                        <img src={square} alt='Name' />
                                        <button> Services </button>
                                        <img src={dropDown_Img} />
                                    </th>
                                    <th><button> Sales Conversion </button></th>
                                    <th><button> Statistics</button></th>
                                    <th><button> Price </button></th>
                                    <th><button> Action </button></th>
                                </tr>
                                <tr className='port-tr'>
                                    <td className="port-td">
                                        <img src={square} alt='Name' />
                                        <span>
                                            Brain Stroke Treatment Brain Stroke Treatment Brain Stroke Treatment Brain Stroke Treatment
                                        </span>
                                    </td>
                                    <td>#31 of 45 leads</td>
                                    <td className="port-stats-td">
                                        <button><img src={eye} alt='View' /></button>
                                        <button><img src={bookmark} alt='Save' /></button>
                                        <button><img src={phone} alt='Phone' /></button>
                                        <button><img src={click} alt='Click' /></button>
                                    </td>
                                    <td><span>$100,000</span></td>
                                    <td>
                                        <img src={pen_Img} />
                                        <img src={delete_Img} />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <div>
                                <div className="port-customer-service">
                                    <img src={customer_service} alt="Customer Service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
