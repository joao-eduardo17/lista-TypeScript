import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Altera from "../abstrato/altera"

export default class AlteraProduto extends Altera {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public alterar(): void {
        let altera = false
        console.log(`\n------------------------------`)
        let id = this.entrada.receberNumero(`Digite o ID do produto que deseja alterar: `)
        this.produtos.forEach((produto, index) => {
            if(produto.id === id) {
                let nome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
                let preco = this.entrada.receberNumero(`Digite o novo preço do produto: `)
                let newProduto = new Produto(id, nome, preco)
                this.produtos.splice(index, 1, newProduto)
                console.log(`\nProduto alterado com sucesso`)
            }
        })
        if(!altera) {
            console.log(`\nID não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}