import React, { useEffect } from 'react'
import './Home.css'
import { Box, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import TabProduto from '../../componentes/produto/tabProduto/TabProduto';
function Home() {

  const navigate = useNavigate()
  // const token = useSelector<TokenState, TokenState["tokens"]>(
  //   (state) => state.tokens
  // );

  // useEffect(() => {
  //   if (token === "") {
  //     toast.error("Você precisa estar logado", {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: false,
  //       theme: "colored",
  //       progress: undefined,
  //     })
  //     navigate('/login')
  //   }
  // }, [token])


  return (
    <>
<Box>  
     <Box padding={10}>
        <Link
          to={`/formularioProduto`}
          className="text-decorator-none"
        >
          <Box>
            <Button
              variant="contained"
              className="marginLeft"
              size="small"
              color="primary"
            >
              Cadastrar Produto
            </Button>
          </Box>
        </Link>




      </Box>
      <Link
        to={`/formularioCategoria`}
        className="text-decorator-none"
      >
        <Box padding={10}>
          <Button
            variant="contained"
            className="marginLeft"
            size="small"
            color="primary"
          >
            Cadastrar Categoria
          </Button>
        </Box>
      </Link>
</Box>   
<Box>
  {TabProduto}
</Box>
 </>
  )
}

export default Home