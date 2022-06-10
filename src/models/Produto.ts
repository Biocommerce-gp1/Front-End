import Categoria from "./Categoria";

interface Produto {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    descricao: string;
    foto: string;
    desconto: string;
    categoria?: Categoria | null
}

export default Produto;