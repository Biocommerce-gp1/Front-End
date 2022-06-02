<<<<<<< HEAD
import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    </>
=======
import Login from './pages/Login/Login';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'; 
import React from 'react';
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
  );
}

export default App;
