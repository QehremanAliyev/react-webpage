import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

function Home() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {state.user?.email}!</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </div>
  );
}

export default Home;
