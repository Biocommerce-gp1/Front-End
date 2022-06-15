import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";


function NavBarDeslogado() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="fundo" variant="dense">
                    <Link to="/home"></Link>


                    <Box className="cursor2" >
                        <Typography color="inherit">
                            seja bem vinde, faça seu
                        </Typography>
                    </Box>


                    <Link to="/login" className="text-decoration">
                        <Box mx={0.5} className="cursor">
                            <Typography color="inherit">
                                Login
                            </Typography>
                        </Box>
                    </Link>

                    <Box className="cursor2" >
                        <Typography color="inherit">
                            ou
                        </Typography>
                    </Box>

                    <Link to="/cadastro" className="text-decoration">
                        <Box mx={0.5} className="cursor">
                            <Typography color="inherit">
                                Cadastre-se
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/home" className="text-decoration">
                        <Box marginLeft={8} className="cursor">
                            <Typography color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>


                    <Link to="/produto" className="text-decoration">
                        <Box marginLeft={8} className="cursor">
                            <Typography color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/sobre-nos" className="text-decoration">
                        <Box marginLeft={8} className="cursor">
                            <Typography color="inherit">
                                Sobre nós
                            </Typography>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default NavBarDeslogado;