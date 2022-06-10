import React, { useEffect } from 'react'
import './Home.css'
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
function Home() {
  
  const navigate = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
        toast.error("Você precisa estar logado",{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })          
          navigate('/login')
    }
}, [token])


  return (
    <>
    <Box className='img'>
       
    </Box>
    
    </>
  )
}

export default Home