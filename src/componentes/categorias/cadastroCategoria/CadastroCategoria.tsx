import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroCategoria() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [token, setToken] = useLocalStorage('token')

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        secao: '',
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function findById(id: string) {
        await buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                await put(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Categoria atualizado com sucesso');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }

        } else {

            try {
                await post(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Categoria cadastrado com sucesso');

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }
        }

        back()
    }

    function back() {
        navigate('/categoria')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de Cadastro Categoria</Typography>
                <TextField value={categoria.secao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="secao" label="secao" variant="outlined" name="secao" margin="normal" fullWidth />
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;