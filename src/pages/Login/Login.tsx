import React from 'react'
import { Grid, Paper, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <>
         <Grid container className='background'>
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                    <Box className="card" width={340} height="50vh" borderRadius={5}
                        marginTop={12} display="flex" justifyContent="center" alignItems="center">
                            <Box>
                                <Typography className='form-title' variant="h3" gutterBottom align="center">
                                    Login
                                </Typography>

                                <form id='form'>
                                    <Box marginY={4}>
                                        <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
                                    </Box>

                                    <Box marginY={4}>
                                        <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
                                    </Box>
                    
                                    <Box textAlign='center'>
                                        <Link to='/home' className='text-decoration'>
                                            <Button variant="contained" color="secondary" className="botao" type='submit'>
                                            Login
                                        </Button>
                                        </Link>
                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1} className='cadastrar'>
                                        <Typography variant='subtitle1' gutterBottom align='center'>
                                            Não tem uma conta?</Typography>
                                    </Box>
                                    
                                    <Typography variant='subtitle1' gutterBottom align='center' className='cadastrar-conta'>
                                        Cadastre-se</Typography>

                                </Box> 


                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default Login;