import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import User from "../../../models/User";
import NavbarAdm from "../navbarAdm/NavbarAdm";
import { buscaId } from "../../../services/Service";
import { ExitToApp } from "@material-ui/icons";
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
  // const id = useSelctor...

  //Service buscaId(id)

  //const [user, setUser] = useState<User>

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/home");
  }

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
           seja vem vinde, faça seu 
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

          <Link to="/home" className="text-decoration">
            <Box marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

         
          <Link to="/produto" className="text-decoration">
            <Box marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>
          
          <Link to="/sobre-nos" className="text-decoration">
            <Box  marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Sobre nós
              </Typography>
            </Box>
          </Link>
         
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbar}</>;
}

export default Navbar;
