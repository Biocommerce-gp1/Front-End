import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';

let navigate = useNavigate()

const [confirmarSenha, setConfirmarSenha] = useState<String>("")

const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
})

const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
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

    if (confirmarSenha === user.senha) {

        try {
            await CadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert("Usuário cadastrado com sucesso")

        } catch (error) {
            console.log(`Error: ${error}`)

            alert("Usuário já existente")
        }

    } else {
        alert('Confirmação de senha incorreta!')

        setUser({ ...user, senha: "" })
        setConfirmarSenha("")
    }

    if (user.senha.length >= 8) {
        try {
            await CadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert("Usuário cadastrado com sucesso")

        } catch (error) {
            console.log(`Error: ${error}`)

            alert("Usuário já existente")
        }
    } else {
        alert("Insira no miníno 8 caracteres na senha.")

        setUser({ ...user, senha: "" })
        setConfirmarSenha("")
    }

}

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth className='formulario' />
                        <TextField id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth className='formulario' />
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth className='formulario' />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='formulario' />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='formulario' />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                    Cadastrar
                                </Button></Link>

                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;