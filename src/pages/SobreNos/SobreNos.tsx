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
import { fontWeight } from '@mui/system';

function SobreNos() {

  const navigate = useNavigate()



  return (
    <>
      <NavBarPadrao />
      <Container maxWidth="lg">
        <div className='cpSbNos'>

          <h1 className='quemSomos'>Quem somos?</h1>
          <div className='secao1'>

            <div className='blocoDeDivs'>

              <p>Amigos da preservação e do meio ambiente, o Biocommerce nasceu a partir de um sonho: tornar comunidades e cidades mais sustentáveis. Baseado na ODS 11 da ONU, realizamos vendas de produtos sustentáveis de boa qualidade com preços acessíveis, a fim de criar um impacto ambiental positivo nas comunidades, extendendo-se para cidades e municipios. Além de sermos um e-commerce de produtos sustentáveis que sonha com cidades e comunidades melhores, nós também temos o projeto que prevê o plantio de árvores em comunidades usando parte da renda obtida na venda dos produtos, fazendo com que o nosso sonho seja realizado um pouco a cada dia. Mais que uma empresa, somos sonhadores de um mundo melhor para se viver.</p>
            </div>

            <div className='blocoDeDivs'>
              <img className='img1' src="https://i.imgur.com/t1YjIi5.png" alt="" />
            </div>

          </div>

          <h2 className='noqNosBaseamos'>No que nos baseamos?</h2>

          <div className="secao1">

            <div className='blocoDeDivs'>
              <img src="https://i.imgur.com/jtHdHxH.png" alt="" />
            </div>

            <div className='blocoDeDivs'>

              <p>
                <h4>Objetivo de desenvolvimento sustentável (ODS) 11: Cidades e comunidades sustentáveis.</h4>

                <a href="https://brasil.un.org/pt-br/sdgs/11">11.7 </a>
                Até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência.
              </p>
            </div>
          </div>
        </div>

        <div className="corpomvv">

          <div className="mvvl">
            <h2>MISSÃO</h2>
            <div>
              <p>Proporcionar áreas verdes para lazer da comunidade.</p>
            </div>

          </div>


          <div className="mvvl">
            <img src="https://i.imgur.com/5IMWilc.png" alt="" />
          </div>

          <div className="mvvl">
            <img src="https://i.imgur.com/JuRlQ2z.png" alt="" />
          </div>

          <div className="mvvl">


            <h2>VISÃO</h2>
            <p>Cooperar com a diminuição das consequências causadas pelos desmatamentos e poluição na sociedade.</p>


          </div>

          <div className="mvvl">
            <h2>VALORES</h2>
            <div>
              <p>Ética, inovação e responsabilidade social são valores fundamentais para nós, e nos tornam empaticos, fortes e dinâmicos.</p>
            </div>

          </div>

          <div className="mvvl">
            <img src="https://i.imgur.com/nFmMlBn.png" alt="" />
          </div>

          <div className='blocoColaboradores'>

            <div className="cardDosDevs">
              <div className='imgDev1'><p  style={{ fontWeight: 'bold' }}>Amanda Lobo - Full Stack Developer Jr.</p> 
              <p> Detalhista, focada, comunicativa, apaixonada pelo conhecimento, insaciável por novos desafios e irrefreável na resolução de problemas. Tem como principal objetivo se aprofundar na área de tecnologia</p> </div>
              <div className="corpoContatoDev">
                <a href="https://www.linkedin.com/in/amandag-lobo/" target='_blank'><div className='linkedinIcon'></div></a>
                <a href="https://github.com/amanda-lobo" target='_blank'><div className='githubIcon'></div></a>
              </div>
            </div>

            <div className="cardDosDevs">
              <div className='imgDev2'><p style={{ fontWeight: 'bold' }}>Bruna Leitão</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quos libero iusto. Tempore ducimus sint cupiditate! Eaque, esse molestiae, quod quos ipsam explicabo officiis remque a!</p></div>
              <div className="corpoContatoDev">
                <a href="https://www.linkedin.com/in/bruna-leitao/" target="_blank"><div className='linkedinIcon'></div></a>

                <a href="https://github.com/brunacr" target="_blank"><div className='githubIcon'></div></a>
              </div>

            </div>

            <div className="cardDosDevs">
              <div className='imgDev3'><p style={{ fontWeight: 'bold' }}>Carol Aizawa - Full Stack Developer Jr.</p><p>Apaixonada pelo aprendizado e ajudar as pessoas. Pensa na área de desenvolvimento web como uma forma de tornar a vida das pessoas mais prática, simples e acessível.</p></div>
              <div className="corpoContatoDev">
                <a href="https://www.linkedin.com/in/carolina-aizawa-moreira-9b0624179/" target="_blank"><div className='linkedinIcon'></div></a>

                <a href="https://github.com/ninaai517" target="_blank"><div className='githubIcon'></div></a>
              </div>

          </div>

          <div className="cardDosDevs">
            <div className='imgDev4'><p style={{ fontWeight: 'bold' }}>Douglas Rocha - Full Stack Developer Jr.</p><p>Um pequeno sonhador que almeja novos desafios, e que um dia vai fazer a diferença</p></div>
            <div className="corpoContatoDev">
              <a href="https://www.linkedin.com/in/doug-rocha/" target="_blank"><div className='linkedinIcon'></div>
              </a>
             <a href="https://github.com/dogzeira" target="_blank"><div className='githubIcon'></div></a>
            </div>

          </div>

          <div className="cardDosDevs">
            <div className='imgDev5'><p style={{ fontWeight: 'bold' }}>João Pedro</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quos libero iusto. Tempore ducimus sint cupiditate! Eaque, esse molestiae, quod quos ipsam explicabo officiis remque a!</p></div>
            <div className="corpoContatoDev">

             <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-meira/" target="_blank"> <div className='linkedinIcon'></div></a>

             <a href="https://github.com/mweira" target="_blank"><div className='githubIcon'></div></a>
            </div>

          </div>

          <div className="cardDosDevs">
            <div className='imgDev6'><p style={{ fontWeight: 'bold' }}>Milene Bohomol - Full Stack Developer Jr.</p><p>Apaixonada por tecnologia. Persistente, criativa, estudiosa e com muita força de vontade e dedicação para alcançar todos os seus  objetivos.</p></div>
            <div className="corpoContatoDev">

              <a href="https://www.linkedin.com/in/milene-bohomol-16bb81237/" target="_blank"><div className='linkedinIcon'></div></a>

              <a href="https://github.com/mbohomol" target="_blank"><div className='githubIcon'></div></a>
            </div>

          </div>

          <div className="cardDosDevs">
            <div className='imgDev7'><p style={{ fontWeight: 'bold' }}>Thalmai Correia</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quos libero iusto. Tempore ducimus sint cupiditate! Eaque, esse molestiae, quod quos ipsam explicabo officiis remque a!</p></div>
            <div className="corpoContatoDev">

              <a href="https://www.linkedin.com/in/thalmaicorreia/" target="_blank"><div className='linkedinIcon'></div> </a>

              <a href="https://github.com/ThalmaiCorreia" target="_blank"><div className='githubIcon'></div></a>
            </div>

          </div>

        </div>



      </div>



    </Container>

    </>
  );
}

export default SobreNos