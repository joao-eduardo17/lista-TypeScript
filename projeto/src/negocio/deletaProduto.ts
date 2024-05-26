import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deleta from "./deleta";

export default class DeletaProduto extends Deleta {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        let remove = false
        console.log(`\n------------------------------`)
        let id = this.entrada.receberNumero(`Digite o ID do produto que deseja apagar: `)
        this.produtos.forEach((produto, index,) => {
            if(produto.id === id) {
                this.produtos.splice(index, 1)
                console.log(`\nProduto deletado com sucesso`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`\nID não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}