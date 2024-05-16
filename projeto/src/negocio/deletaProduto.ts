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
        let id = this.entrada.receberNumero(`Digite o ID do produto que deseja apagar: `)
        this.produtos.forEach((produto, index,) => {
            if(produto.id === id) {
                this.produtos.splice(index, 1)
                console.log(`Produto deletado com sucesso\n`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`ID não encontrado\n`)
        }
    }
}