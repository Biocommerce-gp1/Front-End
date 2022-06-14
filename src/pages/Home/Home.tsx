import React, { useEffect } from "react";
import "./Home.css";
import { Box, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import TabProduto from "../../componentes/produto/tabProduto/TabProduto";
function Home() {
 
  return (
    <>
    <Link to="/home">
      <Box className="logo-home">
        <img src="https://i.imgur.com/iNN3fVN.png" alt="LogoBiocommerce"  />
      </Box>
      </Link>

      <Box>{TabProduto}</Box>
      <Box>
        <Box padding={10}>
          <Link to={`/formularioProduto`} className="text-decorator-none">
            <Box>
              <Button
                variant="contained"
                className="marginLeft"
                size="small"
                color="primary"
              >
                Cadastrar Produto
              </Button>
            </Box>
          </Link>
        </Box>
        <Link to={`/formularioCategoria`} className="text-decorator-none">
          <Box padding={10}>
            <Button
              variant="contained"
              className="marginLeft"
              size="small"
              color="primary"
            >
              Cadastrar Categoria
            </Button>
          </Box>
        </Link>
      </Box>
    </>
  );
}

export default Home;
