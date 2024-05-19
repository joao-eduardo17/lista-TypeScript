import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`Início da listagem de servicos\n`)
        this.servicos.forEach(servico => {
            console.log(`ID: ${servico.id}`)
            console.log(`Nome: ${servico.nome}`)
            console.log(`Preço: R$${servico.preco}`)
            console.log(`-----------------------`)
        })
    }
}