import React from 'react'
import '../../styles/sellerDashboardCss/sellerDashboard.css'
import dot_img from '../../assets/dot.png';
import arrow_up from '../../assets/arrow_up.png';
import arrow_down from '../../assets/arrow_down.png';
import purple_dot from '../../assets/purple_dot.png';
import green_dot from '../../assets/green_dot.png';
import clock from '../../assets/clock.png';
import date from '../../assets/date.png';
import customer_service from '../../assets/headphone.png'
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

export default function SellerDashboard() {

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="container">
                <div id="side-bar-holder">
                    <SideBar />
                </div>
                <div className='main-nav'>
                    <div id='header-container'>
                        <Header />
                    </div>
                    <div>
                        <div className="greet-container">
                            <div>
                                <h2>Welcome, John!</h2>
                                <small>Monday, April 8 <span><img src={dot_img} alt="Translation" /></span> 10:45 am</small>
                            </div>
                            <div>
                                <button>7D</button>
                                <button>1M</button>
                                <button>1/2Y</button>
                                <button>1Y</button>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className='card'>
                                <p>Impressions</p>
                                <div className='card-content'>
                                    <div className='cal'>
                                        <p><span>75k</span></p>
                                        <small><img src={arrow_up} alt="Translation" />4%</small>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <p>Click-throughs</p>
                                <div className='card-content'>
                                    <div className='cal-red'>
                                        <p><span>102</span></p>
                                        <small><img src={arrow_down} alt="Translation" />10%</small>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <p>Bookmarks</p>
                                <div className='card-content'>
                                    <div className='cal'>
                                        <p><span>12</span></p>
                                        <small><img src={arrow_up} alt="Translation" />2%</small>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <p>Calls</p>
                                <div className='card-content'>
                                    <div className='cal'>
                                        <p><span>8</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-todo-container">
                            <div className="chart-container">
                                <div>
                                    <h3>Overview</h3>
                                    <div className="impression-calls">
                                        <div>
                                            <img src={purple_dot} alt="Impression" />
                                            <p>Impression</p>
                                        </div>
                                        <div>
                                            <img src={green_dot} alt="Class" />
                                            <p>Calls</p>
                                        </div>
                                    </div>
                                    <div className="chart-line">
                                        <small>5M <span></span></small>
                                        <small>1M <span></span></small>
                                        <small>500k <span></span></small>
                                        <small>100k <span></span></small>
                                        <small>50k <span></span></small>
                                        <small>10k <span></span></small>
                                        <small>5k <span></span></small>
                                        <small>2k <span></span></small>
                                        <small>0 <a></a></small>
                                    </div>
                                    <div className='days-of-week-container'>
                                        <div className='days-of-week'>
                                            <small>Sun</small>
                                            <small>Mon</small>
                                            <small>Tues</small>
                                            <small>Wed</small>
                                            <small>Thur</small>
                                            <small>Fri</small>
                                            <small>Sat</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="todo-list-container">
                                <div>
                                    <div>
                                        <h2>To-do</h2>
                                        <button>See all</button>
                                    </div>
                                    <div>
                                        <p><span></span>Create a new portfolio today</p>
                                        <div>
                                            <small><span><img src={date} alt='Calender' /></span>10-08-24</small>
                                            <small><span><img src={clock} alt='Calender' /></span>9:00AM</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-service">
                                    <img src={customer_service} alt="Customer Service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
