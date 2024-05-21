import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../components/register.css'

export default function Register() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:4000/register', {firstname, lastname, email, phonenumber, password}, 
        {headers:{'Content-Type': 'application/json'}})
        if(response.status !== 200){
          throw new Error('Response not Good')
        }else{
          const data =  response.data;
          console.log('This is the data gotten --> ',data)
        }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id='reg-form'>
        <input type='text' placeholder='Enter you Firstname' onChange={(event) => setFirstName(event.target.value)}  required />
        <br/>
        <input type='text' placeholder='Enter you Lastname' onChange={(event) => setLastName(event.target.value)} required />
        <br/>
        <input type='email' placeholder='Enter you Email' onChange={(event) => setEmail(event.target.value)} required />
        <br/>
        <input type='tel' placeholder='Enter Phone Number' onChange={(event) => setPhoneNumber(event.target.value)}  required/>
        <br/>
        <input type='password' placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} required />
        <br/>
        <button id='reg-btn'>Submit</button>
      </form>
    </div>
  )
}
