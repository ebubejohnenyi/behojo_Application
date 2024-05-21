import '../components/verifyToken.css';
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyToken() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleVerification = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/verifyToken', { token },
        { headers: { Authorization: `Bearer ${token}` } })
      if (response.status !== 200) {
        alert('Invalid Token')
        return navigate('/login');
      } else {
        const data = response.data.userToken;
        console.log('This is the data gotten --> ', data)
        alert('Login Successful')
        return navigate('/dashboard',{replace: true})
      }
    } catch (error) {
      return console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleVerification} id='verifyToken-form'>
        <input type='text' placeholder='Enter you Token' onChange={(event) => setToken(event.target.value)} required />
        <br />
        <button id='verify-btn'>Submit</button>
      </form>
    </div>
  )
}
