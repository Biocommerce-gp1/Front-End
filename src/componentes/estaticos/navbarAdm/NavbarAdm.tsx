import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function NavbarAdm() {

    return (
        <>
            <AppBar position="static">
                <Toolbar className="fundo" variant="dense">

                    <Link to="/home" className="text-decoration">
                        <Box className="cursor">
                            <Typography variant="h5" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/produto" className="text-decoration">
                        <Box mx={1} className="cursor" marginLeft={5}>
                            <Typography variant="button"color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                    </Link>

                    <Link to={`/formularioProduto`} className="text-decoration">
                        <Box mx={1} className="cursor" marginRight={5}>
                           <AddCircleOutlineIcon />
                        </Box>
                    </Link>

                    <Link to="/categoria" className="text-decoration">
                        <Box mx={1} className="cursor" >
                            <Typography variant="button" color="inherit">
                                Categorias
                            </Typography>
                        </Box>
                    </Link>

                    <Link to={`/formularioCategoria`} className="text-decoration">
                        <Box mx={1} className="cursor">
                           <AddCircleOutlineIcon />
                        </Box>
                    </Link>

                    <Link to="/login" className="text-decoration2">
                        <Box marginLeft={95} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavbarAdm;
