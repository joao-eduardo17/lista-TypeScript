import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    
    public listar(): void {
        console.log(`Início da listagem de produtos\n`)
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.id}`)
            console.log(`Nome: ${produto.nome}`)
            console.log(`-----------------------`)
        })
    }

}