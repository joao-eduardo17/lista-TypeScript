import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../abstrato/cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\n------------------------------`)
        console.log(`Início do cadastro de produto`)
        let id = this.entrada.receberNumero(`Digite o ID do produto: `)
        let nome = this.entrada.receberTexto(`Digite o nome do produto: `)
        let preco = this.entrada.receberNumero(`Digite o preço do produto: `)
        let produto = new Produto(id, nome, preco)
        this.produtos.push(produto)
        console.log(`\nProduto cadastrado com sucesso :)`)
        console.log(`------------------------------\n`)
    }
}