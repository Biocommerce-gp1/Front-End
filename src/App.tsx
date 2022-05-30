import Login from './pages/Login/Login';
import React from 'react';
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from '@material-ui/icons';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
