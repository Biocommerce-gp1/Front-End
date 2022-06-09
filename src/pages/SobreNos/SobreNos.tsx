import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';

function SobreNos() {
  return (
    <>
      <Grid className='backgroundSobre' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item md={10}>
          <Box paddingX={0} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3" align="center">Sobre nós!</Typography>
            <Typography variant="h5" gutterBottom component="h5" align="center">Temos o desafio de transformar as cidades em ambientes mais acolhedores, humanos e sustentáveis. Por este motivo criamos um e-commerce voltado para o consumo sustentável, gerando o plantio de árvores usando parte da renda obtida na venda dos produtos, tornando os produtos sustentáveis mais acessíveis e criando um impacto ambiental positivo através do plantio de árvores.</Typography>
          </Box>

          <Grid alignItems='center' item md={12} className='centro'>

            <div className='icon'>
              <img src="https://i.imgur.com/hnfCyqF.jpg" alt="Amanda Lobo" className='devs espaco' />

              <div className='integrantes'>Amanda Lobo</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/amandag-lobo/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/ZykQ5kF.jpg" alt="Bruna Leitão" className='devs espaco' />

              <div className='integrantes'>Bruna Leitão</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/bruna-leitao/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/brunacr" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/msHlIy3.png" alt="Carol Aizawa" className='devs espaco' />

              <div className='integrantes'>Carol Aizawa</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/carolina-aizawa-moreira-9b0624179/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/ninaai517" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/jYBGrfd.jpg" alt="Douglas Rocha" className='devs espaco' />

              <div className='integrantes'>Douglas Rocha</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/doug-rocha/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/dogzeira" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/XC2L4PI.jpg" alt="João Pedro" className='devs espaco' />

              <div className='integrantes'>João Pedro</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-meira/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/mweira" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/E27lm28.jpg" alt="Milene Bohomol" className='devs espaco' />

              <div className='integrantes'>Milene Bohomol</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/milene-bohomol-16bb81237/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/mbohomol" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

            <div className='icon'>
              <img src="https://i.imgur.com/08ZFVre.jpg" alt="Thalmai Correia" className='devs espaco' />

              <div className='integrantes'>Thalmai Correia</div>

              <footer className='integrantes'>
                <a href="https://www.linkedin.com/in/thalmaicorreia/" target='_blank'>
                  <LinkedIn />
                </a>
                <a href="https://github.com/ThalmaiCorreia" target='_blank'>
                  <GitHub />
                </a>
              </footer>
            </div>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SobreNos