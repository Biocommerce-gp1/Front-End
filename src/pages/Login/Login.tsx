import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Login.css";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";

function Login() {
  let navigate = useNavigate(); //antigo history = useHistory
  const [token, setToken] = useLocalStorage("token");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    tipo: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if (userLogin.tipo === 'administrador') {
        navigate('/login')
    }
}, [userLogin])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <>
      <Grid container className="background">
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80vh"
          >
            <Box
              className="card"
              width={340}
              height="50vh"
              borderRadius={5}
              marginTop={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography
                  className="form-title"
                  variant="h3"
                  gutterBottom
                  align="center"
                >
                  Login
                </Typography>

                <form onSubmit={onSubmit}>
                  <Box marginY={4}>
                    <TextField
                      value={userLogin.usuario}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedModel(e)
                      }
                      id="standard-basic"
                      label="E-mail"
                      name="usuario"
                      type="email"
                      required
                      fullWidth
                    />
                  </Box>

                  <Box marginY={4}>
                    <TextField
                      value={userLogin.senha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updatedModel(e)
                      }
                      className="form-input"
                      id="standard-basic"
                      label="Senha"
                      name="senha"
                      type="password"
                      required
                      fullWidth
                    />
                  </Box>

                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="botao"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Box>
                </form>
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Box marginRight={1} className="cadastrar">
                    <Typography variant="subtitle1" gutterBottom align="center">
                      Não tem uma conta?
                    </Typography>
                  </Box>
                  <Link className="text-decoration" to="/cadastro">
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      align="center"
                      className="cadastrar-conta"
                    >
                      Cadastre-se
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
