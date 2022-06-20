import React, { useEffect } from 'react'
import { Typography, Box, Grid, Button, Card, CardContent, CardActions } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import NavBarPadrao from '../../componentes/estaticos/navBarPadrao/NavBarPadrao';
import Container from '@mui/material/Container/Container';

function SobreNos() {

  const navigate = useNavigate()

  return (
    <>
    <NavBarPadrao />
    <Container maxWidth="lg">

      <main id="sobre">
        <section>

          <div>
            <h2>QUEM SOMOS?</h2>
            <p>Amigos da preservação e do meio ambiente, o Biocommerce nasceu a partir de um sonho: tornar comunidades e cidades mais sustentáveis. Baseado na ODS 11 da ONU, realizamos vendas de produtos sustentáveis de boa qualidade com preços acessíveis, a fim de criar um impacto ambiental positivo nas comunidades, extendendo-se para cidades e municipios. Além de sermos um e-commerce de produtos sustentáveis que sonha com cidades e comunidades melhores, nós também temos o projeto que prevê o plantio de árvores em comunidades usando parte da renda obtida na venda dos produtos, fazendo com que o nosso sonho seja realizado um pouco a cada dia. Mais que uma empresa, somos sonhadores de um mundo melhor para se viver.</p>
          </div>
          <img src="https://i.imgur.com/Az3YtKK.png" alt="" />
        </section>

        <section>
          <img src="https://i.imgur.com/ntasv49.png" alt="" />
          <div>
            <h2>NO QUE NOS BASEAMOS?</h2>
            <p>Objetivo de desenvolvimento sustentável (ODS) 11: Cidades e comunidades sustentáveis</p>
            <p>
            <a href="https://brasil.un.org/pt-br/sdgs/11">11.7 </a>
               Até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência.  
            </p>
            
          </div>

        </section>
      
        <section>
          <div>
            <h2>MISSÃO</h2>
            <p>Proporcionar áreas verdes para lazer da comunidade.</p>
          </div>
          <img src="https://i.imgur.com/sLErQdr.png" alt="" />
        </section>

        <section>
          <img src="https://i.imgur.com/x0YEVmQ.png" alt="" />
          <div>
            <h2>VISÃO</h2>
            <p>Cooperar com a diminuição das consequências causadas pelos desmatamentos e poluição na sociedade.</p>
          </div>
        </section>

        <section>
          <img src="https://i.imgur.com/UoEeFPg.png" alt="" />
          <div>
            <h2>VALORES</h2>
            <p>Ética, inovação e responsabilidade social são valores fundamentais para nós, e nos tornam empaticos, fortes e dinâmicos.</p>
          </div>
        </section>
        </main>

        <Grid className='back'>
      <Grid className='alinhar'>
        <Box className='box2'>
        <Typography className='titulo' variant="h3" gutterBottom component="h3" align="center">NOSSO TIME</Typography>
          <Box><img src="https://i.imgur.com/hnfCyqF.jpg" alt="Amanda Lobo" className='foto' /></Box>
          <Typography className='nomes'>Amanda Lobo</Typography>
          <a href="https://www.linkedin.com/in/amandag-lobo/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/amanda-lobo" target="_blank"><GithubIcon className='icones' /></a>
        </Box>
        <Box className='box2'>
          <Box><img src="https://i.imgur.com/ZykQ5kF.jpg" alt="Bruna Leitão" className='foto' /></Box>
          <Typography className='nomes'>Bruna Leitão</Typography>
          <a href="https://www.linkedin.com/in/bruna-leitao/" target="_blank">
            <LinkedInIcon className='icones' /></a>
          <a href="https://github.com/brunacr" target="_blank">
            <GithubIcon className='icones' /></a>
        </Box>
        <Box className='box2'>
          <Box><img src="https://i.imgur.com/msHlIy3.png" alt="Carol Aizawa" className='foto' /></Box>
          <Typography className='nomes'>Carol Aizawa</Typography>
          <a href="https://www.linkedin.com/in/carolina-aizawa-moreira-9b0624179/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/ninaai517" target="_blank"><GithubIcon className='icones' /></a>
        </Box>
      </Grid>

      <Grid className='alinhar'>
        <Box className='box2'>
          <Box><img src="https://i.imgur.com/jYBGrfd.jpg" alt="Douglas Rocha" className='foto' /></Box>
          <Typography className='nomes'>Douglas Rocha</Typography>
          <a href="https://www.linkedin.com/in/doug-rocha/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/dogzeira" target="_blank"><GithubIcon className='icones' /></a>
        </Box>
        <Box className='box2'>
          <Box><img src="https://i.imgur.com/XC2L4PI.jpg" alt="João Pedro" className='foto' /></Box>
          <Typography className='nomes'>João Pedro</Typography>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-meira/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/mweira" target="_blank"><GithubIcon className='icones' /></a>
        </Box>
        <Box className='box2'>
          <Box><img src="https://i.imgur.com/E27lm28.jpg" alt="Milene Bohomol" className='foto' /></Box>
          <Typography className='nomes'>Milene Bohomol</Typography>
          <a href="https://www.linkedin.com/in/milene-bohomol-16bb81237/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/mbohomol" target="_blank"><GithubIcon className='icones' /></a>
        </Box>

        <Box className='box2'>
          <Box><img src="https://i.imgur.com/08ZFVre.jpg" alt="Thalmai Correia" className='foto' /></Box>
          <Typography className='nomes'>Thalmai Correia</Typography>
          <a href="https://www.linkedin.com/in/thalmaicorreia/" target="_blank"><LinkedInIcon className='icones' /></a>
          <a href="https://github.com/ThalmaiCorreia" target="_blank"><GithubIcon className='icones' /></a>
        </Box>
      </Grid>

    </Grid>

</Container>
      
    </>
  );
}

export default SobreNos