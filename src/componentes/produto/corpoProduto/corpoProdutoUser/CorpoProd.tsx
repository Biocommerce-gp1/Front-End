import React from "react";
import "./CorpoProd.css";


export default function CorpoProd(props: any) {

    return (
    <>
    <div className="cardBody">
            <div className="cardImg">
              <img className="imgProd" src={props.link} alt="" />
            </div>

            <div className="descricaoCard">
              <div className="alignCenter">
                <div className="prodName">{props.name}</div>
                <div className="prodValue">R$ {props.preco}</div>
               
                <button className="buttonComprar"> <div>Comprar</div>  <button className="buttonAddKart">+</button></button>
                
              </div>

            </div>
          </div>
    </>
    );
}

