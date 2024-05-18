import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ user }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === user.email && form.password === user.password) {
      navigate('/home');
    } else {
      alert('Email veya Parol yanlışdır');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <input name="password" type="password" placeholder="Parol" value={form.password} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}/> <br></br>
      <button type="submit" style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>Login</button>
    </form>
  );
}

export default Login;
