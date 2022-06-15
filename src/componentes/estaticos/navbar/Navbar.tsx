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
import NavBarDeslogado from "../navbarDeslogado/NavBarDeslogado";

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

      navbar = <NavBarDeslogado />

  }

  return ({ navbar }
  )
}

export default Navbar;
