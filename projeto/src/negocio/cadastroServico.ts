import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`Início do cadastro de serviço`)
        let id = this.entrada.receberNumero(`Digite o ID do serviço: `)
        let nome = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Digite o preço do serviço: `)
        let servico = new Servico(id, nome, preco)
        this.servicos.push(servico)
        console.log(`Serviço cadastrado com sucesso :)\n`)
    }
}