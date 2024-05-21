import '../components/login.css'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) =>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:4000/login', {email,  password}, 
        {headers:{'Content-Type': 'application/json'}})
        if(response.status !== 200){
          navigate('/login')
          alert('No user found')
          throw new Error('User not found')
        }else{
          const data =  response.data;
          console.log('This is the data token --> ',data)
          alert('Access Token has been sent to your mail!')
        }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin} id='log-form'>
        <input type='email' placeholder='Enter you Email' onChange={(event) => setEmail(event.target.value)} required />
        <br/>
        <input type='password' placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} required />
        <br/>
        <button id='sub-btn'>Submit</button>
      </form>
    </div>
  )
}
