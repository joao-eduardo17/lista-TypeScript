import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Deleta from "./abstrato/deleta"

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public deletar(): void {
        let remove = false
        console.log(`\n------------------------------`)
        let cpf = this.entrada.receberTexto(`\nInsira o número do CPF do usuário que deseja apagar: `)
        this.clientes.forEach((cliente, index) => {
            if(cliente.getCpf.getValor === cpf) {
                this.clientes.splice(index, 1)
                console.log(`\nUsuário deletado com sucesso`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`\nCPF não encontrado`)
        }

        console.log(`------------------------------\n`)
    }
}