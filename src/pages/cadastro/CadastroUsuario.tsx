import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
  });

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login");
    }
  }, [userResult]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } catch (error) {
        console.log(`Error: ${error}`);

       
      }
    } else {
      toast.error("Dados do usuário inconsistentes. Erro ao logar", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="background"
    >
    
      <Grid item xs={12} alignItems="center">
        <Box paddingX={60}>
          <form onSubmit={cadastrar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastro:
            </Typography>
           
            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              required
              fullWidth
              className="formulario"
            />

            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="E-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              required
              fullWidth
              className="formulario"
            />

            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              placeholder="mínimo 8 caracteres" 
              required
              fullWidth
              className="formulario"
            />

            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
             
              required
              fullWidth
              className="formulario"
            />

            <Box marginTop={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                className="btnCadastrar"
              >
                Cadastrar
              </Button>

              <Link to="/home" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
            </Box>
            
          </form>
          </Box>
          
        
        
      </Grid>
      
    </Grid>
   
  );
}

export default CadastroUsuario;
