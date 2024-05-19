import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Altera from "./altera";

export default class AlteraServico extends Altera {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public alterar(): void {
        let altera = false
        let id = this.entrada.receberNumero(`Digite o ID do serviço que deseja alterar: `)
        this.servicos.forEach((servico, index) => {
            if(servico.id === id) {
                let nome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
                let preco = this.entrada.receberNumero(`Digite o novo preço do produto: `)
                let newServico = new Servico(id, nome, preco)
                this.servicos.splice(index, 1, newServico)
                console.log(`Serviço alterado com sucesso\n`)
            }
        })
        if(!altera) {
            console.log(`ID não encontrado\n`)
        }
    }
}