import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'; 
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Home from './pages/Home/Home';
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
