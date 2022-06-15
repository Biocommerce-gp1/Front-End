import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';

function NavbarLogado() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  
    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
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
    <AppBar position="static">
        <Toolbar className="fundo" variant="dense">
          <Link to="/home"></Link>

          
        <Box className="cursor2" >
          <Typography color="inherit">
           seja bem vinde 
          </Typography>
        </Box>

          <Link to="/home" className="text-decoration">
            <Box marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

         
          <Link to="/produto" className="text-decoration">
            <Box marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>
          
          <Link to="/sobre-nos" className="text-decoration">
            <Box  marginLeft={8} className="cursor">
              <Typography  color="inherit">
                Sobre nós
              </Typography>
            </Box>
          </Link>
         

          <Box  marginLeft={90} className="cursor">
            <Typography variant="h6" color="inherit" onClick={goLogout}>
              Sair
            </Typography>
          </Box>
          <Box mx={1} className="cursor2" onClick={goLogout} marginRight={0}>
            <ExitToApp />
          </Box>
        </Toolbar>
      </AppBar></>
  )
}

export default NavbarLogado