import Container from "@material-ui/core/Container/Container";
import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../searchInput/SearchInput";
import "./NavBarPadrao.css";

export default function NavBarPadrao() {
  return (

    <Container className="body" maxWidth="lg">
      <div className="box-home">
        <div className="items">
          <SearchInput />
        </div>
        <div className="items">
          <img className="logoBio" src="https://i.imgur.com/GHDJoz7.png" alt="" />
        </div>
        <div className="items">
          <img src="https://i.imgur.com/aIwaWW1.png" alt="" className="kart-icon" />
        </div>
      </div>

      <div className="navBarTwo">
        <div className="nav">
          <div>
          <Link to="/home">
            <li className="li">Home</li>
          </Link>
          </div>
        
          <div>
          <Link to="/produto">
            <li className="li">Produtos</li>
          </Link>
          </div>
          
          <div>
          <Link to="/sobre">
            <li className="li">Sobre Nós</li>
          </Link>
          </div>

         <div>
         <Link to="/contato">
            <li className="li">Contato</li>
          </Link>
         </div>
        
         
         


        </div>
      </div>
    </Container>

  );
}