import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Xoş gəlmisiniz, {user.lastName} {user.firstName}</h1>
      <p style={{
        color:'red'
      }}>Email: {user.email}</p>
      <p style={{
        color:'blue'
      }}>Adres: {user.address}</p>
      <button onClick={() => navigate('/contact')} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>Contact</button>
    </div>
  );
}

export default Home;
