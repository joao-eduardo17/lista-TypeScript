import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Altera from "./altera";

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
        let id = this.entrada.receberNumero(`Digite o ID do produto que deseja alterar: `)
        this.produtos.forEach((produto, index) => {
            if(produto.id === id) {
                let nome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
                let newProduto = new Produto(id, nome)
                this.produtos.splice(index, 1, newProduto)
                console.log(`Produto alterado com sucesso\n`)
            }
        })
        if(!altera) {
            console.log(`ID não encontrado\n`)
        }
    }
}