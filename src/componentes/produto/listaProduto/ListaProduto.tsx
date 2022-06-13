import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../services/Service";
import './ListaProduto.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from "react-toastify";

function ListaProduto() {
  let navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produto[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
  }, [produtos.length]);

  return (
    <>
      {produtos.map((produto) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produto
              </Typography>

              <Typography variant="h5" component="h2">
                {produto.nome}
              </Typography>

              <Typography variant="body2" component="p">
                {produto.descricao}
              </Typography>

              <Typography variant="body2" component="p">
                {produto.categoria?.secao}
              </Typography>

              <Typography variant="body2" component="p">
                {produto.preco}
              </Typography>

              <Typography variant="body2" component="p">
                {produto.desconto}
              </Typography>
              
              <img src={produto.foto} alt="" />
            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioProduto/${produto.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link
                  to={`/deletarProduto/${produto.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaProduto;
