import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ fontSize: '45px', fontFamily: 'monospace', textAlign: 'center' }}>Xoş gəlmisiniz!</h1>
      <p style={{ fontSize: '30px', fontFamily: 'italic', marginLeft: '10px' }}>Ad: {user.firstName}</p>
      <p style={{ fontSize: '30px', fontFamily: 'italic', marginLeft: '10px' }}>Soyad: {user.lastName}</p>
      <p style={{ fontSize: '30px', fontFamily: 'italic', marginLeft: '10px' }}>Email: {user.email}</p>
      <p style={{ fontSize: '30px', fontFamily: 'italic', marginLeft: '10px' }}>Adres: {user.address}</p>
      <button onClick={() => navigate('/contact')} className='btn' style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '20%', height: '45px', marginLeft: '10px', color: 'red' ,fontSize:'20px' ,fontFamily:'Cambria'}}>Contact</button>
    </div>
  );
}

export default Home;
