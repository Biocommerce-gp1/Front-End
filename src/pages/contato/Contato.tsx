import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import Container from '@mui/material/Container/Container'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBarPadrao from '../../componentes/estaticos/navBarPadrao/NavBarPadrao'
import Contato from '../../models/Contato';
import { postaMensagem } from '../../services/Service';
import './Contato.css'

function ContateNos()
{

    let navigate = useNavigate();

    const [contato, setContato] = useState<Contato>({
        id: 0,
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [contatoResult, setContatoResult] = useState<Contato>({
        id: 0,
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });



    function updatedModelContato(e: ChangeEvent<HTMLInputElement>) {
        setContato({
            ...contato,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        await postaMensagem(`/contate-nos`, contato, setContatoResult);
        // await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Obrigado por nos contatar, em breve entraremos em contato via email!", {
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



    return (
        <>
            <NavBarPadrao />

            <Container maxWidth="lg">

                <Box paddingX={30}>
                    <form onSubmit={cadastrar}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                        >
                            Contate-nos
                        </Typography>

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelContato(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            required
                            fullWidth

                        />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelContato(e)}
                            id="usuario"
                            label="E-mail"
                            variant="outlined"
                            name="email"
                            margin="normal"
                            required
                            fullWidth

                        />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelContato(e)}
                            id="assunto"
                            label="Assunto"
                            variant="outlined"
                            name="assunto"
                            margin="normal"
                            required
                            fullWidth
                        />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelContato(e)}
                            id="assunto"
                            label="Mensagem"
                            variant="outlined"
                            multiline
                            rows={5}
                            name="mensagem"
                            margin="normal"
                            required
                            fullWidth
                        />
                        <Box margin={5} marginTop={2} textAlign="center">
                            <Button
                                type="submit"
                                variant="contained"
                                className="btnEnviar"
                            >
                                Enviar
                            </Button>

                        </Box>

                    </form>
                </Box>
            </Container>
        </>
    )
    

}
  

export default ContateNos;