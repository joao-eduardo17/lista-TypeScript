import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deleta from "./abstrato/deleta";

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
        console.log(`\n------------------------------`)
        let id = this.entrada.receberNumero(`Digite o ID do serviço que deseja apagar: `)
        this.servicos.forEach((servico, index) => {
            if(servico.id === id) {
                this.servicos.splice(index, 1)
                console.log(`\nServiço deletado com sucesso`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`\nID não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}