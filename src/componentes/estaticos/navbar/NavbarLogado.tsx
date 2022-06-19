import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import User from '../../../models/User';
import { buscaId } from '../../../services/Service';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./Navbar.css";

function NavbarLogado() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    const id = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  
  
    const [user, setUser] = useState<User>({
      id: +id, // Faz uma conversão de String para Number
      nome: "",
      usuario: "",
      senha: "",
      tipo: "",
    });

    async function findById(id: string) {
      buscaId(`/usuarios/${id}`, setUser, {
        headers: {
          Authorization: token,
        },
      });
    }

    useEffect(() => {
      if (id !== undefined) {
        findById(id);
      }
    }, [id]);

  
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
     <div className='logout'>
    <AppBar position="static">
        <Toolbar className="fundo" variant="dense">
          <Link to="/home"></Link>

          
        <Box className="cursor2" >
          <Typography color="inherit">
           Seja bem vinde, 
          </Typography>
        </Box>
       
        <Box  mx={0.5} className="cursor">
          <Typography color="inherit">
           {user.nome}
          </Typography>
        </Box>
    
          <Box  marginLeft={130} className="cursor">
            <Typography variant="h6" color="inherit" onClick={goLogout}>
              Sair
            </Typography>
          </Box>
          <Box mx={1} className="cursor2" onClick={goLogout} marginRight={0}>
            <ExitToApp className='exitApp'/>
          </Box>
        </Toolbar>
        
      </AppBar>
      </div>
      </>
  )
}

export default NavbarLogado