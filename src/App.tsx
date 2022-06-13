import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Home from './pages/Home/Home';
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import Login from './pages/login/Login';
import ListaCategoria from './componentes/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
import CadastroAdm from './pages/adm/CadastroAdm';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaProduto from './componentes/produto/listaProduto/ListaProduto';
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto';
import CadastroProduto from './componentes/produto/cadastroProduto/CadastroProduto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/sobre-nos' element={<SobreNos />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path='/admin' element={<CadastroAdm />} />
            <Route path="/produto" element={<ListaProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/adm" element={<CadastroAdm />} />
            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
            <Route path="/formularioProduto" element={<CadastroProduto />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;
