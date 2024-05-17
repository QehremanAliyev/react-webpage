import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        surname: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '15px',
                    }}
                    type='text'
                    name='name'
                    placeholder='Ad'
                    value={formData.name}
                    onChange={handleChange}
                /><br></br><br></br>
                <input
                    style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '15px'
                    }}
                    type='text'
                    name='surname'
                    placeholder='Soyad'
                    value={formData.surname}
                    onChange={handleChange}
                /><br></br><br></br>
                <input
                    style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '15px'
                    }}
                    type='number'
                    name='number'
                    placeholder='Nömrə'
                    value={formData.number}
                    onChange={handleChange}
                /><br></br><br></br>
                <input
                    style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '15px'
                    }}
                    type='email'
                    name='email'
                    placeholder='E-poçt'
                    value={formData.email}
                    onChange={handleChange}
                /><br></br><br></br>
                <textarea
                    style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '15px'
                    }}
                    name='message'
                    placeholder='Mesaj'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea><br></br><br></br>
                <button type='submit' style={{
                    backgroundColor: 'lightblue',
                    borderRadius: '15px',
                    fontSize: '20px',
                    width: '50%',
                    height: '40px'
                }}>Göndər</button>
            </form>
            <br></br>
            <table style={{
                backgroundColor: 'yellow',
                borderRadius: "10px",
                width: "50%",
                border: '1px solid #000',
                padding: "10px"
            }}>

                <thead style={{
                    fontSize: '20px',
                    color: 'blue'
                }}>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Nömrə</th>
                        <th>E-poçt</th>
                        <th>Mesaj</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{
                        fontSize: '20px',
                        fontFamily: "cursive",
                        color: 'red'
                    }}>
                        <td>{formData.name}</td>
                        <td>{formData.surname}</td>
                        <td>{formData.number}</td>
                        <td>{formData.email}</td>
                        <td>{formData.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ContactForm;
