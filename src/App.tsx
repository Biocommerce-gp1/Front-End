import Login from './pages/Login/Login';
import Navbar from './componentes/estaticos/navbar/Navbar'
import React from 'react';
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from '@material-ui/icons';

function App() {
  return (
<<<<<<< HEAD
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
=======
    <>
    <Navbar />
    <Login />
    </>
    
    
>>>>>>> 81f6d740f7388989180274f3286ed231973391de
  );
}

export default App;
