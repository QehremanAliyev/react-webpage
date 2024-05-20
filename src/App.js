import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/signUp';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/contact" element={<Contact user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
