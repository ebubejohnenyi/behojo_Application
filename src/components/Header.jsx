import React from 'react'
import '../components/Header.css'
import search_Img from '../assets/search.png';
import file_Img from '../assets/file.png';
import translation_Img from '../assets/translation.png';
import seller_profile_Img from '../assets/profile.jpg';
import { useState } from 'react';
export default function Header() {
    const [loginUserDetails, setLoginUserDetails] = useState('');
    const userDetails_FromLogin = async () => {
        console.log('A click just happen')
        try{
            const response = await fetch('http://localhost:5000/login', {
                method: 'GET',
            })
            if(response.ok){
                const userData = response.json();
                const {firstname, lastname, email, password} = userData;
                console.log("This is the Login User Details ==>", userData)
                // setLoginUserDetails(firstname, lastname, email, password);
            }
        }catch(error){
            console.log('Error Fetching User Details')
        }
    }
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            <div className="h-container">
                <div>
                    <div>
                        <div className="h-navbar-container">
                            <div className="h-search_box">
                                <img src={search_Img} alt="Search" />
                                <input type="search" placeholder="Search" />
                            </div>
                            <div>
                                <div>
                                    <img src={file_Img} alt="File" />
                                    <button onClick={userDetails_FromLogin}>Add new service</button>
                                </div>
                                <div className="h-translation-div">
                                    <img src={translation_Img} alt="Translation" />
                                </div>
                                <div className="header-profile-container">
                                    <div className="h-profile">
                                        <img src={seller_profile_Img} alt="Translation" />
                                    </div>
                                    <div>
                                        <p>Ebube John Enyi</p>
                                        <small>Top 0.1</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
