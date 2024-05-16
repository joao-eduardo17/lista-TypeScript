import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`Início do cadastro de produto`)
        let id = this.entrada.receberNumero(`Digite o ID do produto: `)
        let nome = this.entrada.receberTexto(`Digite o nome do produto: `)
        let produto = new Produto(id, nome)
        this.produtos.push(produto)
        console.log(`Produto cadastrado com sucesso :)\n`) 
    }
}