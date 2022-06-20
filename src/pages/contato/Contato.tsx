import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import Container from '@mui/material/Container/Container'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBarPadrao from '../../componentes/estaticos/navBarPadrao/NavBarPadrao'
import './Contato.css'

function Contato() {
   let navigate = useNavigate();

    function envio() {
        toast.info("Mensagem enviada", {
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

        function placeholderHidden(){
            <input className='inputMsg'/>
        }
    
    return (
        <>
            <NavBarPadrao />

            <Container maxWidth="lg">

                <Box paddingX={30}>
                    <form>
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
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            required
                            fullWidth

                        />

                        <TextField
                            id="usuario"
                            label="E-mail"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            required
                            fullWidth

                        />

                        <TextField
                            id="assunto"
                            label="Assunto"
                            variant="outlined"
                            name="assunto"
                            margin="normal"
                            required
                            fullWidth

                        />

                        <textarea id="msg" name="msg" rows={4} cols={50} className='inputMsg' placeholder='Mensagem *' />
                        <Box margin={5} marginTop={2} textAlign="center">
                            <Button onClick={envio}
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

export default Contato