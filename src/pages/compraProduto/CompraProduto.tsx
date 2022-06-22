import Container from "@material-ui/core/Container/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import NavBarPadrao from "../../componentes/estaticos/navBarPadrao/NavBarPadrao";
import Produto from "../../models/Produto";
import { buscaId, deleteId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./CompraProduto.css";


function CompraProduto() {

    let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [produtos, setProdutos] = useState<Produto>()

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produto/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function Carrinho() {
        toast.success("Compra finalizada com sucesso, você receberá um e-mail de confirmação", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
        navigate("/home");
      }



    return (
        <>
            <NavBarPadrao />
            <Container maxWidth="lg">
                <div className="bodyProduto">
                    <div className="imgDescricao">
                        <div className="imgDoProduto">
                            <img src={produtos?.foto} alt="" />
                        </div>

                        <div className="informacoesDoProduto">
                            <div>
                                {produtos?.descricao}
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>

                    <div className="decricaoProduto">
                        <div className="nomeDoProduto">
                            {produtos?.nome}
                        </div>
                        <div className="hrProduto"></div>
                        <div className="por">
                            Por:
                        </div>
                        <div className="precoProduto">
                            R$:{produtos?.preco}
                        </div>
                        <div className="hrProduto"></div>
                        <div className="desconto">
                        {produtos?.desconto}% de desconto
                        </div>
                        <div className="btnComprar">
                            <button className="btnComprar" onClick={Carrinho}> <div>Comprar</div>  </button>
                        </div>

                    </div>

                </div>

            </Container>
        </>
    );

}
export default CompraProduto;

