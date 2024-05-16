import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Deleta from "./deleta"

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
        let cpf = this.entrada.receberTexto(`\nInsira o número do CPF do usuário que deseja apagar: `)
        this.clientes.forEach((cliente, index) => {
            if(cliente.getCpf.getValor === cpf) {
                this.clientes.splice(index, 1)
                console.log(`Usuário deletado com sucesso\n`)
                remove = true
            }
        })
        if(!remove) {
            console.log(`CPF não encontrado\n`)
        }
    }
}