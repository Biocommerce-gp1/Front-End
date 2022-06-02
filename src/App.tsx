<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componentes/estaticos/footer/Footer";
import "./App.css";
=======
import React from 'react';
import Login from './pages/Login/Login';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'; 
import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Home from './pages/Home/Home';
>>>>>>> 258627216d64203604116da8b19be78c70b112d2


function App() {
  return (
    <Router>
<<<<<<< HEAD
=======
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
>>>>>>> 258627216d64203604116da8b19be78c70b112d2
      <Footer />
    </Router>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 258627216d64203604116da8b19be78c70b112d2
export default App;
