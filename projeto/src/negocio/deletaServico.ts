import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deleta from "./deleta";

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        let remove = false
        let id = this.entrada.receberNumero(`Digite o ID do serviço que deseja apagar: `)
        this.servicos.forEach((servico, index) => {
            if(servico.id === id) {
                this.servicos.splice(index, 1)
                console.log(`Serviço deletado com sucesso\n`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`ID não encontrado\n`)
        }
    }
}