import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './SobreNos.css';

function SobreNos() {
  return (
   <>
   <Grid className='background' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3" align="center">Sobre nós!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, eaque omnis numquam corrupti sequi explicabo facere sit ex voluptates similique! Doloremque officiis dolorem molestiae nisi sapiente velit minima facilis corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, ipsam, veritatis sequi qui culpa fugiat eius minus libero consectetur dolor facilis cupiditate ad consequatur dicta repudiandae ducimus veniam officiis iusto.</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} >
        </Grid>
        {/* <Grid xs={12}>
        </Grid> */}
      </Grid>
    </>
  );
}

export default SobreNos