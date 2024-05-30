import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Servico from "../../modelo/servico"
import Cadastro from "../abstrato/cadastro"

export default class CadastroServicoPet extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n------------------------------`)
        let vincula = false
        let cpf = this.entrada.receberTexto(`Digite o CPF do dono: `)
        this.clientes.forEach(cliente => {
            if(cliente.getCpf.getValor === cpf) {
                let nome = this.entrada.receberTexto(`Digite o nome do Pet: `).toLowerCase()
                cliente.getPets.forEach(pet => {
                    if(pet.getNome.toLowerCase() === nome) {
                        let id = this.entrada.receberNumero(`Digite o ID do servico: `)
                        this.servicos.forEach(servico => {
                            if(servico.id === id) {
                                pet.getProdutosConsumidos.push(servico)
                                console.log(`\nServiço ${id} vinculado ao pet ${pet.getNome} do(a) cliente ${cliente.nome}`)
                                vincula = true
                            }
                        })
                    }
                })
            }
        })
        if(!vincula) {
            console.log(`\nCPF, ID ou nome não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}