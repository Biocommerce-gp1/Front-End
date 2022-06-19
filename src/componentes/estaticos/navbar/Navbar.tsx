import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import User from "../../../models/User";
import NavbarAdm from "../navbarAdm/NavbarAdm";
import { buscaId } from "../../../services/Service";
import NavbarLogado from "./NavbarLogado";

function Navbar() {
  
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const id = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const tipo = useSelector<TokenState, TokenState["tipo"]>(
    (state) => state.tipo
  );

  const [user, setUser] = useState<User>({
    id: +id, // Faz uma conversão de String para Number
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
  });

  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
  }

  let navbar;
  console.log("TIPO DO USUÁRIO: " + tipo);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  if (tipo === "adm") navbar = <NavbarAdm />;

  else if (token !== ""){
    navbar = <NavbarLogado />
  }
  else {
    navbar = (
      <AppBar position="static">
        <Toolbar className="fundo" variant="dense">
          <Link to="/home"></Link>

          
        <Box  className="cursor2" >
          <Typography color="inherit">
           Seja bem vinde, faça seu 
          </Typography>
        </Box>
        

          <Link to="/login" className="text-decoration">
        <Box  mx={0.5} className="cursor">
          <Typography color="inherit">
           Login
          </Typography>
        </Box>
        </Link>

        <Box  className="cursor2" >
          <Typography color="inherit">
          ou
          </Typography>
        </Box>

        <Link to="/cadastro" className="text-decoration">
        <Box  mx={0.5} className="cursor">
          <Typography color="inherit">
           Cadastre-se
          </Typography>
        </Box>
        </Link>

         
         
        </Toolbar>
      </AppBar>
    );
  }

  return (<>{navbar}</>);
}

export default Navbar;
