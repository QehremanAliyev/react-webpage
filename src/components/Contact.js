import React, { useState } from 'react';
import './App.css';

function Contact({ user }) {
    const [form, setForm] = useState({ message: '' });
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages((prevMessages) => [...prevMessages, { ...user, message: form.message }]);
        setForm({ message: '' });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="Add" value={user.firstName} readOnly style={{ margin: '10px 10px ', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                <input name="lastName" placeholder="Soyad" value={user.lastName} readOnly style={{ margin: '10px 10px ', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                <input name="address" placeholder="Adres" value={user.address} readOnly style={{ margin: '10px 10 px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                <input name="email" placeholder="Email" value={user.email} readOnly style={{ margin: '10px 10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                <textarea name="message" placeholder="Mesaj" value={form.message} onChange={handleChange} required style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                <button type="submit" style={{
                    border: '1px solid #ccc', borderRadius: '4px', width:'10%'
                }}>Göndər</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Adres</th>
                        <th>Email</th>
                        <th>Mesaj</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((msg, index) => (
                        <tr key={index}>
                            <td>{msg.firstName}</td>
                            <td>{msg.lastName}</td>
                            <td>{msg.address}</td>
                            <td>{msg.email}</td>
                            <td>{msg.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;
