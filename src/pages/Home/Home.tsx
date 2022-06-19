import React, { useEffect } from "react";
import "./Home.css";
import Container from "@mui/material/Container";
import NavBarPadrao from "../../componentes/estaticos/navBarPadrao/NavBarPadrao";
import CorpoProd from "../../componentes/produto/corpoProduto/corpoProdutoUser/CorpoProd";

function Home() {

  return (
    <>

      <NavBarPadrao />

      <Container className="body" maxWidth="lg">

        <div className="carrousel">
          <img src="https://i.imgur.com/x0mAVsv.gif" alt="" />
        </div>



        <div className="prodSeparator">
          <h2>Destaques da Semana</h2>
          <div className="lineSeparator">
          </div>
        </div>
        <div className="blocoDeProd">
          <CorpoProd name={"Canudo Fibra de Coco"} preco={"39.99"} link={"https://i.imgur.com/BmOYsGw.png"} />
          <CorpoProd name={"Xícara Fibra de Coco"} preco={"45.99"} link={"https://i.imgur.com/G6COalx.png"} />
          <CorpoProd name={"Copo Fibra de Coco"} preco={"29.99"} link={"https://i.imgur.com/Xm49YkS.png"} />
          <CorpoProd name={"Bow Ecológico"} preco={"14.99"} link={"https://i.imgur.com/utvoBpT.png"} />

        </div>


        <div className="prodSeparator">
          <h2>Os Mais Procurados</h2>
          <div className="lineSeparator">
          </div>
        </div>
        <div className="blocoDeProd">
          <CorpoProd name={"Esponja Ecológica"} preco={"4.99"} link={"https://i.imgur.com/ltCOjzE.png"} />
          <CorpoProd name={"Tapete Ecológico"} preco={"49.99"} link={"https://i.imgur.com/6aSssSM.png"} />
          <CorpoProd name={"Cabide Fibra de Coco"} preco={"11.99"} link={"https://i.imgur.com/pfkNgs8.png"} />
          <CorpoProd name={"Porta Celular Fibra de Coco"} preco={"49.99"} link={"https://i.imgur.com/qBiFzCS.png"} />

        </div>

        <div className="prodSeparator">
          <h2>Produtos com desconto</h2>
          <div className="lineSeparator">
          </div>
        </div>
        <div className="blocoDeProd">
          <CorpoProd name={"Colher Fibra de Coco"} preco={"3.99"} link={"https://i.imgur.com/LFzAklx.png"} />
          <CorpoProd name={"Vasinho Fibra de Coco"} preco={"25.49"} link={"https://i.imgur.com/luwc7UC.png"} />
          <CorpoProd name={"Copo Térmico com Tampa"} preco={"57.39"} link={"https://i.imgur.com/yXyCT6T.png"} />
          <CorpoProd name={"Espelho de Bolsa"} preco={"27.49"} link={"https://i.imgur.com/Cb4X7mg.png"} />

        </div>




      </Container>

    </>
  );
}

export default Home;
