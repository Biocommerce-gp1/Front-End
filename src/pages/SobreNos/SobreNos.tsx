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

function SobreNos() {

  const navigate = useNavigate()

  return (
    <>
      <main id="sobre">
        <section>

          <div>
            <h2>QUEM SOMOS?</h2>
            <p>Amigos da preservação e do meio ambiente, o Biocommerce nasceu a partir de um sonho: tornar comunidades e cidades mais sustentáveis. Baseado na ODS 11 da ONU, realizamos vendas de produtos sustentáveis de boa qualidade com preços acessíveis, a fim de criar um impacto ambiental positivo nas comunidades, extendendo-se para cidades e municipios. Além de sermos um e-commerce de produtos sustentáveis que sonha com cidades e comunidades melhores, nós também temos o projeto que prevê o plantio de árvores em comunidades usando parte da renda obtida na venda dos produtos, fazendo com que o nosso sonho seja realizado um pouco a cada dia. Mais que uma empresa, somos sonhadores de um mundo melhor para se viver.</p>
          </div>
          <img src="https://i.imgur.com/SeIfgGp.png" alt="" />
        </section>

        <section>
          <img src="https://i.imgur.com/SeIfgGp.png" alt="" />
          <div>
            <h2>NO QUE NOS BASEAMOS?</h2>
            <p>Objetivo de desenvolvimento sustentável (ODS) 11: Cidades e comunidades sustentáveis</p>
            <p>
            <a href="https://brasil.un.org/pt-br/sdgs/11">11.7 </a>
               Até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência.  
            </p>
            
          </div>

        </section>
        </main>
        <section>
          <div>
            <h2>MISSÃO</h2>
            <p>Proporcionar áreas verdes para lazer da comunidade.</p>
          </div>
          {/* <img src="" alt="" /> */}
        </section>

        <section>
          {/* <img src="" alt="" /> */}
          <div>
            <h2>VISÃO</h2>
            <p>Cooperar com a diminuição das consequências causadas pelos desmatamentos e poluição na sociedade.</p>
          </div>
        </section>

        <section>
          {/* <img src="" alt="" /> */}
          <div>
            <h2>VALORES</h2>
            <p>Ética, inovação e responsabilidade social são valores fundamentais para nós, e nos tornam empaticos, fortes e dinâmicos.</p>
          </div>
        </section>


      
    </>
  );
}

export default SobreNos