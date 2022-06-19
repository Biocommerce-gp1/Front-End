import React from "react";
import "./CorpoProdAdm.css";


export default function CorpoProdAdm() {

    return (
    <>
    <div className="cardBody">
            <div className="cardImg">
              <img className="imgProd" src="https://i.imgur.com/G6COalx.png" alt="" />
            </div>

            <div className="descricaoCard">
              <div className="alignCenter">
                <div className="prodName">Caneca Bio</div>
                <div className="prodValue">R$ 34.90</div>
               
            
                <button className="buttonAtt"> 
                <div>Atualizar</div>  
                <button className="buttondelete">x</button>
                </button>
                
              </div>

            </div>
          </div>
    </>
    );
}