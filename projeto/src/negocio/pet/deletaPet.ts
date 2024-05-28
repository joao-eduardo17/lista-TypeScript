import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deleta from "./abstrato/deleta";

export default class DeletaPet extends Deleta {
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
        let cpf = this.entrada.receberTexto(`\nInsira o número do CPF do cliente: `)
        this.clientes.forEach(cliente => {
            if(cliente.getCpf.getValor === cpf) {
                let petNome = this.entrada.receberTexto(`Digite o nome do pet que deseja excluir: `).toLowerCase()
                cliente.getPets.forEach((pet, index) => {
                    if(pet.getNome.toLowerCase() === petNome) {
                        cliente.getPets.splice(index, 1)
                        console.log(`\nPet deletado`)
                        remove = true
                    }
                })
            }
        })
        if(!remove) {
            console.log(`\nCPF ou nome não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}