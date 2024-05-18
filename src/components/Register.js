import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ setUser }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="Ad" value={form.firstName} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <input name="lastName" placeholder="Soyad" value={form.lastName} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <input name="address" placeholder="Adres" value={form.address} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <input name="password" type="password" placeholder="Parol" value={form.password} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} /> <br></br>
      <button type="submit" style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>Register</button>
    </form>
  );
}

export default Register;
