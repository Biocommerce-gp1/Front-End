import { Box, Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../../models/User'
import { cadastroUsuario } from '../../../services/Service'

function CadastroAdm() {
    let navigate = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        tipo: ""
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        tipo: ""
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
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={cadastrar}>
                            <Typography variant='h3' gutterBottom component='h3' align='center' className='titulo'>Cadastrar</Typography>

                            <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} name='nome' margin='normal' type='name' required fullWidth />

                            <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='E-mail' name='usuario' margin='normal' type='email' required fullWidth />

                            <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' name='senha' margin='normal' type='password' required fullWidth />

                            <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar senha' name='confirmarSenha' margin='normal'
                                type='password' required fullWidth />

                            

                                <Box marginTop={2} textAlign='center'>
                                    <Link to='/login' className='text-decoration'>
                                        <Button variant='contained' color='secondary' className='button'>
                                            Cancelar
                                        </Button>
                                    </Link>

                                    <Button type='submit' variant='contained' color='primary' className='button'>
                                        Cadastrar
                                    </Button>

                                </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>

    )
}

export default CadastroAdm