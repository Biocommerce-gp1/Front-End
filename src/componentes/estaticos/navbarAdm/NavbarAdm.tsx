import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Navbar from "../navbar/Navbar";
import "./NavBarAdm.css";


function NavbarAdm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navBarAdm;

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

  if (token !== "") {
    navBarAdm =
      <>
        <AppBar position="static">
          <Toolbar className="fundo" variant="dense">

            <Link to="/home" className="text-decoration">
              <Box className="cursor">
                <Typography variant="h5" color="inherit">
                  Administração
                </Typography>
              </Box>
            </Link>

            <Link to="/produto" className="text-decoration">
              <Box mx={1} className="cursor" marginLeft={5}>
                <Typography variant="button" color="inherit">
                  Produtos
                </Typography>
              </Box>
            </Link>

            <Link to={`/formularioProduto`} className="text-decoration">
              <Box mx={1} className="cursor" marginRight={5}>
                <AddCircleOutlineIcon />
              </Box>
            </Link>

            <Link to="/categoria" className="text-decoration">
              <Box mx={1} className="cursor" >
                <Typography variant="button" color="inherit">
                  Categorias
                </Typography>
              </Box>
            </Link>

            <Link to={`/formularioCategoria`} className="text-decoration">
              <Box mx={1} className="cursor">
                <AddCircleOutlineIcon />
              </Box>
            </Link>



            <Link to={`/home`} className="logoutAdm" onClick={goLogout}>
              <Box marginLeft={70} className="cursor">
                <Typography variant="h6" color="inherit">
                  Sair
                </Typography>
              </Box>
            </Link>


          </Toolbar>
        </AppBar>
      </>
  }
  else {
    navBarAdm =
      <>
        <AppBar position="static">
          <Toolbar className="fundo" variant="dense">
            <Link to="/home"></Link>


            <Box className="cursor2" >
              <Typography color="inherit">
                Seja bem vinde, faça seu
              </Typography>
            </Box>


            <Link to="/login" className="text-decoration">
              <Box mx={0.5} className="cursor">
                <Typography color="inherit">
                  Login
                </Typography>
              </Box>
            </Link>

            <Box className="cursor2" >
              <Typography color="inherit">
                ou
              </Typography>
            </Box>

            <Link to="/cadastro" className="text-decoration">
              <Box mx={0.5} className="cursor">
                <Typography color="inherit">
                  Cadastre-se
                </Typography>
              </Box>
            </Link>



          </Toolbar>
        </AppBar>
      </>
  }



  return (
    <>{navBarAdm}</>
  )
}

export default NavbarAdm;


