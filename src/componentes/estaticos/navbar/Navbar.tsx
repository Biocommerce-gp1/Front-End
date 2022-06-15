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

function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
         

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}

          <Box  marginLeft={60} className="cursor">
            <Typography variant="h6" color="inherit" onClick={goLogout}>
              Sair
            </Typography>
          </Box>
          <Box mx={1} className="cursor2" onClick={goLogout} marginRight={0}>
            <ExitToApp />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbar}</>;
}

export default Navbar;
