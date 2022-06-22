import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca, buscaId } from "../../../services/Service";
import './ListaProduto.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from "react-toastify";
import NavBarPadrao from "../../estaticos/navBarPadrao/NavBarPadrao";
import Container from "@mui/material/Container/Container";
import User from "../../../models/User";


function ListaProduto() {

  var token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const id = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const tipo = useSelector<TokenState, TokenState["tipo"]>(
    (state) => state.tipo
  );

  const [user, setUser] = useState<User>({
    id: +id,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
  });

  
  function AddToKart() {
    toast.info("Produto adicionado ao carrinho", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }


  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
  }

  console.log("TIPO DO USUÁRIO: " + tipo);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  const [produtos, setProdutos] = useState<Produto[]>([])


  var corpoProd;

  if (tipo === "adm") {
    corpoProd =
      <>
        <div className="prodSeparator">
          <h2>Todos os Produtos</h2>
          <div className="lineSeparator">
          </div>
        </div>
        <div className="blocoDeProd">
          {produtos.map((produto) => (
            <div className="cardBody">
              <div className="cardImg">
                <img className="imgProd" src={produto.foto} alt="" />
              </div>

              <div className="descricaoCard">
                <div className="alignCenter">
                  <div className="prodName">{produto.nome}</div>
                  <div className="prodValue">R$ {produto.preco}</div>

                  <Link to={`/formularioProduto/${produto.id}`}>
                    <button className="buttonAtt">
                      <div>Atualizar</div>
                    

                  <Link
                    to={`/deletarProduto/${produto.id}`}
                    className="text-decorator-none"
                  >  <button className="buttondelete">X</button>
                  </Link>
                  </button>
                  </Link>


                </div>

              </div>
            </div>
          ))}
        </div>

      </>

  }
  else if (token === "") {

    corpoProd = <>
      <div className="prodSeparator">
        <h2>Todos os Produtos</h2>
        <div className="lineSeparator">
        </div>
      </div>
      <div className="blocoDeProd">
        {produtos.map((produto) => (
          <div className="cardBody">
            <div className="cardImg">
              <img className="imgProd" src={produto.foto} alt="" />
            </div>

            <div className="descricaoCard">
              <div className="alignCenter">
                <div className="prodName">{produto.nome}</div>
                <div className="prodValue">R$ {produto.preco}</div>


                <button className="buttonComprar">
                  <Link to={`/compraProduto/${produto.id}`} className='text-decorator-none'>
                    <div className="ComprarBtn">Comprar</div>
                  </Link>
                  <button onClick={AddToKart} className="buttonAddKart">+</button></button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </>

  }
  else {
    corpoProd = <>
      <div className="prodSeparator">
        <h2>Todos os Produtos</h2>
        <div className="lineSeparator">
        </div>
      </div>
      <div className="blocoDeProd">
        {produtos.map((produto) => (
          <div className="cardBody">
            <div className="cardImg">
              <img className="imgProd" src={produto.foto} alt="" />
            </div>

            <div className="descricaoCard">
              <div className="alignCenter">
                <div className="prodName">{produto.nome}</div>
                <div className="prodValue">R$ {produto.preco}</div>


                <button className="buttonComprar">
                  <Link to={`/compraProduto/${produto.id}`} className='text-decorator-none'>
                    <div className="ComprarBtn">Comprar</div>
                  </Link>
                  <button onClick={AddToKart} className="buttonAddKart">+</button></button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </>

  }

  async function getProduto() {
    await busca(`/produto`, setProdutos, {});
  }

  useEffect(() => {
    getProduto();
  }, [produtos.length]);
  console.log(produtos);

  //MONTAR O CARD DE PRODUTO PARA USUARIO DIFERENTE DE ADMINISTRADOR

  return (

    <>
      <NavBarPadrao />
      <Container maxWidth="lg">
        {corpoProd}
      </Container>

    </>

    // <Box display="flex" >
    //   {produtos.map((produto) => (
    //     <Box  m={2}>
    //       <Card variant="outlined"  >
    //         <CardContent>

    //           <Typography variant="h5" component="h2">
    //             {produto.nome}
    //           </Typography>

    //           <Typography variant="body2" component="p">
    //             {produto.descricao}
    //           </Typography>

    //           <Typography variant="body2" component="p">
    //             {produto.categoria?.secao}
    //           </Typography>

    //           <img className="zoo "src={produto.foto} alt="Fotos dos produtos"    />


    //         </CardContent>

    //         <CardActions>
    //           <Box display="flex" justifyContent="center" mb={1.5}>
    //             <Link
    //               to={`/formularioProduto/${produto.id}`}
    //               className="text-decorator-none"
    //             >
    //               <Box mx={1}>
    //                 <Button
    //                   variant="contained"
    //                   className="marginLeft"
    //                   size="small"
    //                   color="primary"
    //                 >
    //                   Atualizar
    //                 </Button>
    //               </Box>
    //             </Link>

    //             <Link
    //               to={`/deletarProduto/${produto.id}`}
    //               className="text-decorator-none"
    //             >
    //               <Box mx={1}>
    //                 <Button variant="contained" size="small" color="secondary">
    //                   Deletar
    //                 </Button>
    //               </Box>
    //             </Link>
    //           </Box>
    //         </CardActions>
    //       </Card>
    //     </Box>
    //   ))}
    // </Box>
  );
}

export default ListaProduto;
