import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario() {

    let navigate = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }
    }, [userResult])


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert("Usuário cadastrado com sucesso")

            } catch (error) {
                console.log(`Error: ${error}`)

                alert("Tá dando erro no cod")
            }

        } else {
            alert('Dados inconsistentes! Por favor, verifique as informações passadas')

            setUser({ ...user, senha: "" })
            setConfirmarSenha("")
        }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='Nome' variant='outlined' name='nome' margin='normal' required fullWidth className='formulario' />

                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth className='formulario' />

                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' required fullWidth className='formulario' />

                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' required fullWidth className='formulario' />

                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' required fullWidth className='formulario' />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>

                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>

                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;