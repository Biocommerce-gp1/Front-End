import Container from "@mui/material/Container/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contato from "../../models/Contato";
import User from "../../models/User";
import { busca, buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import './EmailEnviado.css'

function MostraTodosOsEmails() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
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


    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                Authorization: token,
            },
        });
    }

    const [mensagens, setMensagens] = useState<Contato[]>([])

    async function getProduto() {
        await busca(`/contate-nos`, setMensagens, {});
    }

    useEffect(() => {
        getProduto();
    }, [mensagens.length]);
    console.log(mensagens);

    var corpoEmails;

    if(token !== "" && tipo == "adm")
    {
        corpoEmails = 
        <>
        {mensagens.map((msg) => (
            <div className="corpoDosEmailsRecebidos">
                <div className="secoesDoEmail">
                    <p className="nome">{msg.nome}</p>
                </div>
                <div className="secoesDoEmail">
                    <p className="assunto">{msg.assunto}</p>
                </div>
                <div className="secoesDoEmail">
                    <p className="email">{msg.email}</p>
                </div>
                <div className="apagar">x</div>
            </div>

        ))}
        </>
        }



    return (
        <>
            <Container maxWidth="xl" >
                <div className="painelDeMsg">
                {corpoEmails}

                </div>
            </Container>
        </>
    );
}
export default MostraTodosOsEmails;