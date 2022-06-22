import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addId, addTipo, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    tipo: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
    tipo: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      // Verifica os dados pelo console (Opcional)
      console.log("Token: " + respUserLogin.token);
      console.log("ID: " + respUserLogin.id);

      // Guarda as informações dentro do Redux (Store)
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString())); // Faz uma conversão de Number para String
      dispatch(addTipo(respUserLogin.tipo));
      navigate("/home");
    }
  }, [respUserLogin.token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso", {
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
              height="20vh"
              borderRadius={70}
              marginTop={7}
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
                      Entrar
                    </Button>

                    <Link to='/home'>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="botao"
                      type="submit"
                    >
                      Cancelar
                    </Button>
                    </Link>
                    
                  </Box>
                </form>
                <Box display="flex" justifyContent="center" marginTop={2}></Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
