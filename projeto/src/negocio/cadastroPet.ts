import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\n------------------------------`)
        console.log(`Início do cadastro de Pet\n`)
        let atribui = false
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que vai receber o Pet: `)
        this.clientes.forEach(cliente => {
            if(cliente.getCpf.getValor === cpf) {
                let nome = this.entrada.receberTexto(`Digite o nome do pet: `)
                let tipo = this.entrada.receberTexto(`Digite o tipo do pet: `)
                let raca = this.entrada.receberTexto(`Digite a raça do pet: `)
                let genero = this.entrada.receberTexto(`Digite o gênero do pet: `)
                let pet = new Pet(nome, raca, genero, tipo)
                cliente.getPets.push(pet)
                console.log(`\nPet cadastrado com sucesso :)`)
                atribui = true
            }
        })
        if(!atribui) {
            console.log(`\nCPF não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}