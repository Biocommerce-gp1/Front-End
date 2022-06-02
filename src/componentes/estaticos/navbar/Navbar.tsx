import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';
import './Navbar.css';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className='fundo' variant="dense">
<<<<<<< HEAD
=======

                <Link to='/home' className='text-decoration'>
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Home
                        </Typography>
                    </Box>
<<<<<<< HEAD
=======
                </Link>

                    <Link to='/sobre-nos' className='text-decoration'>
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Sobre nós
                        </Typography>
                    </Box>
<<<<<<< HEAD
=======
                    </Link>
                    
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Produtos
                        </Typography>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
<<<<<<< HEAD
=======
                    <Link to='/login' className='text-decoration'>
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
<<<<<<< HEAD
=======
                    </Link>
                    
>>>>>>> 10d32028ef96a1f794635df27a63db06bca644f4
                </Toolbar>
            </AppBar>
        </>

    );

}

export default Navbar;