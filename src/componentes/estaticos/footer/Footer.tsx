// comando rfce
import React from 'react';
import "./Footer.css";
import { Typography, Box, Grid } from "@material-ui/core";
import { GitHub } from '@material-ui/icons';

function Footer() {
  return (
  <>
<Grid
        className="box"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                className="tamanho-f box2"
                variant="h6"
                align="center"
                gutterBottom
                >
                  Siga-nos para ter acesso ao nosso portfólio: {" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/Biocommerce-gp1" target="_blank">
                  <GitHub className="box4" />
                </a>
              </Box>
            </Box>
            <Box className="box">
              <Box paddingTop={1}>
                <Typography variant="subtitle2" align="center" className="box2">
                  © 2022 Copyright:
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" className="box2" align="center">
                biocommerce.gp01@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

</>
  );
}

export default Footer