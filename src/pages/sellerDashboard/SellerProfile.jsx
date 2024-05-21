import '../../styles/sellerDashboardCss/sellerProfile.css';
import sellerDashboard from '../../assets/sellerDashboard.png';
import leadMgmt from '../../assets/portfolioMgmt.png';
import navIcon from '../../assets/navIcon.png';
import sellerProfile from '../../assets/sellerProfile.png';
import profile_picture from '../../assets/profile.jpg';
import trophy from '../../assets/trophy.png';
import edit_profile from '../../assets/edit.png';
import todo_list from '../../assets/todo_list.png';
import pencil from '../../assets/pencil.png';
import customer_service from '../../assets/headphone.png';
import plus from '../../assets/plus.png';
import menu from '../../assets/list.png';
import dashboard_icon from '../../assets/application.png';
import Header from '../../components/Header';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function SellerProfile() {
    const [editProfileVisible, setEditProfileVisible] = useState(true);
    const [toDoListVisible, setToDoListVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('editProfile');
    const [isCreateToDoDiv, setCreateToDoDiv] = useState(false);
    const [showTaskBtn, setShowTaskBtn] = useState(true)
    const [user, setUser] = useState('');

    const toggleEditProfile = () => {
        setEditProfileVisible(!editProfileVisible);
        setToDoListVisible(false);
        setActiveTab('editProfile');
    };

    const toggleToDoList = () => {
        setToDoListVisible(!toDoListVisible);
        setEditProfileVisible(false);
        setActiveTab('toDoList');
    };

    const toggleCreateToDoDiv = () => {
        console.log('I just click')
        setCreateToDoDiv(!isCreateToDoDiv)
        setShowTaskBtn(false)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token don spoil');
                }
                const response = await axios.post('http://localhost:5000/user', token)
                if (!response.status === 200) {
                    throw new Error('Kaiiii', response.status)
                }
                const data = response.data;
                console.log("This is the data gotten ==> ", data)
            } catch (error) {
                console.log('Potential Error ==> ', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="seller-p-container">
                <div className='seller-p-side-nav'>
                    <div className="seller-p-screen-side-nav-content">
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
                                        background: isActive ? "" : "blue"
                                    })}>
                                    <img src={navIcon} alt="Portfolio Managment" />Portfolio Mgmt
                                </NavLink>
                                <NavLink
                                    to='/seller-profile'
                                    style={isActive => ({
                                        background: isActive ? "rgba(255, 0, 0, 0.106)" : "blue"
                                    })}>
                                    <img src={sellerProfile} alt="Profile Setting" />Profile
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='seller-p-campaign'>
                            <div>
                                <img src={trophy} alt="Campaign" />
                            </div>
                            <h3>Create a Campaign</h3>
                            <p>Create an ad campaign <br /> to reach more users</p>
                            <button>Create Now</button>
                        </div>
                    </div>
                </div>
                <div className='seller-p-main-nav'>
                    <div id='seller-p-header-container'>
                        <Header />
                    </div>
                    <div>
                        <div className="account-container">
                            <h2>Account Settings</h2>
                            <div className="profile-contiainer">
                                <div>
                                    <img src={profile_picture} alt="HCF Profile" />
                                </div>
                                <div>
                                    <h2>Ebube John Enyi</h2>
                                    <small>You're rated Top 0.1</small>
                                </div>
                            </div>
                            <div className='profile-content-container'>
                                <div onClick={toggleEditProfile} className={activeTab === 'editProfile' ? 'activeTab' : ''}>
                                    <img src={edit_profile} alt='Edit Profile' />
                                    <p>Edit Profile</p>
                                </div>
                                <div onClick={toggleToDoList} className={activeTab === 'toDoList' ? 'activeTab' : ''}>
                                    <img src={todo_list} alt='To-Do List' />
                                    <p>To do List</p>
                                </div>
                            </div>
                            <div id='edit-profile-container' className={editProfileVisible ? 'visible' : 'notVisible'}>
                                <div>
                                    <p>
                                        Edit
                                    </p>
                                    <img src={pencil} />
                                </div>
                                <form>
                                    <div>
                                        <label>First Name</label>
                                        <p>Ebube John</p>
                                        <label>Email</label>
                                        <p>ebubejohnenyi@gmail.com</p>
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <p>Enyi</p>
                                        <div>
                                            <label>Password</label>
                                            <p>**********</p>
                                            <button>CHANGE PASSWORD</button>
                                        </div>
                                    </div>
                                    <button className='save-btn'>Save Changes</button>
                                </form>
                            </div>
                            <div id='toDo-list-container' className={toDoListVisible ? 'visible' : 'notVisible'}>
                                <div>
                                    <button><img src={menu} alt='Menu' /></button>
                                    <button><img src={dashboard_icon} alt='Dashboard Icon' /></button>
                                </div>
                                <div>
                                    <h3>Apr 29 * Today * Monday</h3>
                                    <div>
                                        <span><img src={plus} alt='Add Task' /></span>
                                        <button className='addTask' onClick={toggleCreateToDoDiv} >Add Task</button>
                                    </div>
                                    <div>
                                        <form className={isCreateToDoDiv ? 'visible' : 'notVisible'}>
                                            <input type='text' placeholder='Enter Title' name='title' />
                                            <br />
                                            <textarea type='text' placeholder='Enter Text' name='title' />
                                            <br />
                                            <button className='post'>Post</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="hcf-customer-service">
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
