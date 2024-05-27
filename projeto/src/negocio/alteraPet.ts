import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Altera from "./abstrato/altera";

export default class AlteraPet extends Altera {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public alterar(): void {
        let altera = false
        console.log(`\n------------------------------`)
        let cpf = this.entrada.receberTexto(`Digite o número do CPF do cliente: `)
        this.clientes.forEach(cliente => {
            if(cliente.getCpf.getValor === cpf) {
                let nomePet = this.entrada.receberTexto(`Digite o nome do pet que deseja alterar: `).toLowerCase()
                cliente.getPets.forEach((pet, index) => {
                    if(pet.getNome.toLowerCase() === nomePet) {
                        let nome = this.entrada.receberTexto(`Digite o nome do pet: `)
                        let raca = this.entrada.receberTexto(`Digite a raça do pet: `)
                        let genero = this.entrada.receberTexto(`Digite o gênero do pet: `)
                        let tipo = this.entrada.receberTexto(`Digite o tipo do pet: `)
                        let petNovo = new Pet(nome, raca, genero, tipo)
                        cliente.getPets.splice(index, 1, petNovo)
                        console.log(`\nPet alterado com sucesso`)
                        altera = true
                    }
                })
            }
        })
        if (!altera){
            console.log(`\nCPF ou nome não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}