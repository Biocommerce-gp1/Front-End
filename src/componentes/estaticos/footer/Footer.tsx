// comando rfce
import React from 'react';
import "./Footer.css";
import { Typography, Box, Grid } from "@material-ui/core";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <>
    
     <footer className="footer">
        
            <div className="row">
                <div className="footer-col">
                    <h4>Acesso Rápido</h4>
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/cadastro'>Cadastro</Link></li>
                            <li><Link to='/produto'>Produtos</Link></li>

                        </ul>
                    
                </div>
    
                <div className="footer-col">
                    <h4>Categorias</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    
                </div>
                <div className="footer-col">
                    <h4>Contato</h4>
                        <div className="social-links">
                            <a id='insta' href="https://www.instagram.com/" target='_blank'> <InstagramIcon className='redes-sociais' /> </a>
                            <a id='face' href="https://www.facebook.com/" target='_blank'> <FacebookIcon className='redes-sociais'/> </a>
                            <a id='wpp' href="https://web.whatsapp.com/" target='_blank'> <WhatsAppIcon className='redes-sociais'/> </a>
                            <a id='in' href="https://www.linkedin.com/"> <LinkedInIcon className='redes-sociais'/>  </a>
                        </div>
                    
                </div>
            </div>
        
    </footer>
  </>
  );
}

export default Footer;
