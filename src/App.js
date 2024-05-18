// import React, { useReducer } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import { authReducer, initialState } from './reducers/authReducer';

// export const AuthContext = React.createContext();

// function App() {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={state.isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthContext.Provider>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
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
