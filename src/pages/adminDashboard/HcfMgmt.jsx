import React from "react";
import '../../styles/adminDashboardCss/dashboard.css';
import dashBoardImg from '../../assets/dashboard.png';
import customer_supportImg from '../../assets/customer_support.png';
import doctor_Img from '../../assets/doctor.png';
import hospital_Img from '../../assets/hospital.png';
import search_Img from '../../assets/search.png';
import profile_Img from '../../assets/profile.jpg';
import bell_Img from '../../assets/bell.png';
import pen_Img from '../../assets/pen_writing.png';
import dropDown_Img from '../../assets/dropdown.png';
import delete_Img from '../../assets/delete.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function HcfMgmt() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        findAllUser();
    }, []);

    const findAllUser = async () => {
        const enpoint = 'http://localhost:5000/dashboard';
        await fetch(enpoint)
            .then((convertResponse) => convertResponse.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                console.log("Error fetching data ==> ", error);
            })
    }

    const handleDelete = async (userId) => {
        try {
            const userId_toDelete = `http://localhost:5000/dashboard/${userId}`;
            await fetch(userId_toDelete, {
                method: 'DELETE'
            })
                .then((convertResponse) => convertResponse.json())
                .then((data) => {
                    findAllUser();
                })
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }


    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="body">
                <section className="side-nav">
                    <div className="side-nav-content">
                        <h3>Logo <span>PlaceHolder</span></h3>
                        <div>
                            <ul>
                                <li><Link to='/admin-dashboard'><img src={dashBoardImg} alt="Dashboard" />Dashboard</Link></li>
                                <li><Link to='/admin-hcf-mgmt'><img src={customer_supportImg} alt="HCF Mgmt" />HCF Mgmt</Link></li>
                                <li><Link to='/admin-doctor-mgmt'><img src={doctor_Img} alt="Doctor Mgmt" />Doctor Mgmt</Link></li>
                                <li><Link to='/admin-hospital-mgmt'><img src={hospital_Img} alt="Hospital Mgmt" />Hospital Mgmt</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="main-view">
                    <div className="ed">
                        <div className="main-view-nav">
                            <div className="search_box">
                                <img src={search_Img} alt="Search" />
                                <input type="search" placeholder="Search" />
                            </div>
                            <div className="notification-container">
                                <img src={bell_Img} alt="Notification" />
                            </div>
                            <div className="profile">
                                <img src={profile_Img} alt="Profile" />
                            </div>
                        </div>
                    </div>
                    <p>Hcf Mgmt</p>
                    <div className="title-content">
                        <p>Showing <span>{user && user.newuser ? user.newuser.length : 0}</span> Entries</p>
                    </div>
                    <div>
                        <div className="user_data_content">
                            {(user.newuser && Array.isArray(user.newuser) && user.newuser.length > 0) ? (
                                <table className='dashboard-table'>
                                    <thead className='dashboard-thead'>
                                        <tr className="dashboard-tr">
                                            <th><span>S/N</span></th>
                                            <th><span>Name</span></th>
                                            <th><span>User's Email</span></th>
                                            <th><span>User's Phone</span></th>
                                            <th>
                                                <button>
                                                    <span>
                                                        User type
                                                    </span>
                                                    <img src={dropDown_Img} alt="User Type Drop Down" />
                                                </button>
                                            </th>
                                            <th>
                                                <button>
                                                    <span>
                                                        Location
                                                    </span>
                                                    <img src={dropDown_Img} alt="Location Drop Down" />
                                                </button>
                                            </th>
                                            <th><button>Action</button></th>
                                        </tr>
                                    </thead>
                                    <tbody className='dashboard-tbody'>
                                        {user.newuser.map((user, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.user_type}</td>
                                                <td>{user.location}</td>
                                                <td>
                                                    <button>
                                                        <img src={pen_Img} alt="Edit" />
                                                    </button>
                                                    <button id="delete_btn" onClick={() => handleDelete(user._id)}>
                                                        <img src={delete_Img} alt="Delete" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>Loading Data from DB</p>
                            )}
                        </div>
                    </div>
                    <div>
                    </div>
                </section>
            </div>
        </>
    )
}