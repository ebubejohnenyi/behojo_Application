import React from 'react'
import '../../styles/sellerDashboardCss/leadMgmt.css'
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
import Header from '../../components/Header';

import { NavLink } from 'react-router-dom';

export default function LeadMgmt() {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="lead-container">
                <div className='lead-side-nav'>
                    <div className="lead-side-nav-content">
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
                                        background: isActive ? "rgba(255, 0, 0, 0.106)" : "blue"
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
                <div className='lead-main-nav'>
                    <div id='lead-header-container'>
                        <Header />
                    </div>
                    <div>
                        <div className="lead-title-container">
                            <h2>Lead Managment</h2>
                            <div className="lead-title-content">
                                <p>Showing <span>20 <img src={down} alt="Drop Down" /> </span> Entries</p>
                                <div className="btn-side">
                                    <div>
                                        <img src={search_Img} alt="Search" />
                                        <input type="search" placeholder="Search" />
                                    </div>
                                    <button>Add new Lead</button>
                                    <button><img src={down_red_arrow} alt="Down" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="lead-table-container">
                            <table className='l-table'>
                                <tr>
                                    <th>
                                        <img src={square} alt='Name' />
                                        <button> Name </button>
                                        <img src={dropDown_Img} />
                                    </th>
                                    <th>
                                        <button> Email</button>
                                        <img src={dropDown_Img} />
                                    </th>
                                    <th><button> Phone No</button></th>
                                    <th>
                                        <button> Static </button>
                                        <img src={dropDown_Img} />
                                    </th>
                                    <th>
                                        <button> Search </button>
                                        <img src={dropDown_Img} />
                                    </th>
                                    <th><button> Active </button></th>
                                </tr>
                                <tr className='lead-tr'>
                                    <td className="lead-td">
                                        <img src={square} alt='Name' />
                                        <span>
                                            Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi
                                        </span>
                                    </td>
                                    <td>ebubejohnenyi@gmail.com</td>
                                    <td>+2349054498013</td>
                                    <td className='converted-status'><span>Converted</span></td>
                                    <td><span className='l-search'> Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 </span></td>
                                    <td>
                                        <img src={pen_Img} />
                                        <img src={delete_Img} />
                                    </td>
                                </tr>
                                <tr className='lead-tr'>
                                    <td className="lead-td">
                                        <img src={square} alt='Name' />
                                        <span>
                                            Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi
                                        </span>
                                    </td>
                                    <td>ebubejohnenyi@gmail.com</td>
                                    <td>+2349054498013</td>
                                    <td className='pending-status'><span>Pending</span></td>
                                    <td><span className='l-search'> Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 </span></td>
                                    <td>
                                        <img src={pen_Img} />
                                        <img src={delete_Img} />
                                    </td>
                                </tr>
                                <tr className='lead-tr'>
                                    <td className="lead-td">
                                        <img src={square} alt='Name' />
                                        <span>
                                            Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi Ebube John Enyi
                                        </span>
                                    </td>
                                    <td>ebubejohnenyi@gmail.com</td>
                                    <td>+2349054498013</td>
                                    <td className='cancelled-status'><span>Cancelled</span></td>
                                    <td><span className='l-search'> Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 Semicolon Cohort 16 </span></td>
                                    <td>
                                        <img src={pen_Img} />
                                        <img src={delete_Img} />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <div>
                                <div className="lead-customer-service">
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
