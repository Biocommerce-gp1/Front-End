import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './SobreNos.css';

function SobreNos() {
  return (
   <>
   <Grid className='background' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item md={10}>
          <Box paddingX={0} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3" align="center">Sobre nós!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center">Temos o desafio de transformar as cidades em ambientes mais acolhedores, humanos e sustentáveis. Por este motivo criamos um e-commerce voltado para o consumo sustentável, gerando o plantio de árvores usando parte da renda obtida na venda dos produtos, tornando os produtos sustentáveis mais acessíveis e criando um impacto ambiental positivo através do plantio de árvores.</Typography>
          </Box>

          <Grid alignItems='center' item md={10}>
              <img src="https://i.imgur.com/hnfCyqF.jpg" alt="Amanda Lobo" />
              <img src="" alt="" />
          </Grid>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} >
        </Grid>
      </Grid>
    </>
  );
}

export default SobreNos