import React, { useEffect } from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function SobreNos() {

  const navigate = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      })
      navigate('/login')
    }
  }, [token])

  return (
    <>
     <Grid className='backgroundSobre' container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item md={10}>
          <Box paddingX={0} className='txt-home'>
            <Typography variant="h3" gutterBottom component="h3">Sobre o Biocommerce</Typography>
            <Typography variant="h5" gutterBottom component="h3">Quem somos?</Typography>
            <Typography variant='h5'> Amigos da preservação e do meio ambiente, o Biocommerce nasceu a partir de um sonho: tornar comunidades e cidades mais sustentáveis. Baseado na ODS 11 da ONU, realizamos vendas de produtos sustentáveis de boa qualidade com preços acessíveis, a fim de criar um impacto ambiental positivo nas comunidades, extendendo-se para cidades e municipios. Mais que uma empresa, somos sonhadores de um mundo melhor para se viver.</Typography>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom component="h3">O que fazemos?</Typography>
          <Typography variant='h5'> Além de sermos um e-commerce de produtos sustentáveis que sonha com cidades e comunidades melhores, nós também temos o projeto que prevê o plantio de árvores em comunidades usando parte da renda obtida na venda dos produtos, fazendo com que o nosso sonho seja realizado um pouco a cada dia. </Typography>
          </Box>
          <Box>
          <Typography variant='h5'> No que nos baseamos? </Typography>
          <Typography variant='h5'>Objetivo de desenvolvimento sustentável (ODS) 11:<br /> Cidades e comunidades sustentáveis</Typography>
          <Typography>11.7 Até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência.</Typography>
          </Box>

          <Box>
          <Typography variant='h5'> Missão </Typography>
          <Typography>Proporcionar áreas verdes para lazer da comunidade.</Typography>
          </Box>
          <Box>
          <Typography variant='h5'> Visão </Typography>
          <Typography> Cooperar com a diminuição das consequências causadas pelos desmatamentos e poluição na sociedade.</Typography>
          </Box>
          <Box>
            <Typography variant='h5'>Valores</Typography>
            <Typography>Ética, inovação e responsabilidade social são valores fundamentais para nós, e nos tornam empaticos, fortes e dinâmicos.</Typography>
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