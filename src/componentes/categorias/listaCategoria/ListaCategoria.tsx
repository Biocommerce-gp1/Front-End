import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';

import './ListaCategoria.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
<<<<<<< HEAD
function ListaCategoria(){

    let navigate = useNavigate()

=======
function ListaCategoria() {

  let navigate = useNavigate()

>>>>>>> bb082736d90e0d35afcf765acae644d951404a67
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getCategoria() {
    await busca("/categoria", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategoria()
  }, [categorias.length])

<<<<<<< HEAD
    return(
        <>
        {
            categorias.map(categoria =>(
=======
  return (
    <>
      {
        categorias.map(categoria => (
>>>>>>> bb082736d90e0d35afcf765acae644d951404a67

<Box m={2} >
            <Card variant="outlined">
              <CardContent>

                <Typography color="textSecondary" gutterBottom>
                  Categoria
<<<<<<< HEAD
=======
                </Typography>

                <Typography variant="h6" component="h2">
                  {categoria.secao}
>>>>>>> bb082736d90e0d35afcf765acae644d951404a67
                </Typography>

                <Typography variant="h5" component="h2">
                 { categoria.secao }
                </Typography>

                <Typography variant="h5" component="h2">
                 { categoria.descricao }
                </Typography>

              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

<<<<<<< HEAD
                  <Link to={`/formularioTema/${ categoria.id }`} className="text-decorator-none">
=======
                  <Link to={`/formularioTema/${categoria.id}`} className="text-decorator-none">
>>>>>>> bb082736d90e0d35afcf765acae644d951404a67
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>

<<<<<<< HEAD
                  <Link to={`/deletarTema/${ categoria.id }`} className="text-decorator-none">
=======
                  <Link to={`/deletarTema/${categoria.id}`} className="text-decorator-none">
>>>>>>> bb082736d90e0d35afcf765acae644d951404a67
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>

                </Box>
              </CardActions>

            </Card>
          </Box>
<<<<<<< HEAD
          ))
          }
        </>
    )
=======
        ))
      }
    </>
  )
>>>>>>> bb082736d90e0d35afcf765acae644d951404a67
}

export default ListaCategoria;