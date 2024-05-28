import Cliente from "../../modelo/cliente"
import Listagem from "../abstrato/listagem"

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    
    public listar(): void {
        console.log(`\n------------------------------`)
        console.log(`Listagem de todos os pets:`)
        this.clientes.forEach(cliente => {
            if (cliente.getPets.length > 0){
                cliente.getPets.forEach(pet => {
                    console.log(`Nome: ${pet.getNome}`)
                    console.log(`Tipo: ${pet.getTipo}`)
                    console.log(`Raça: ${pet.getRaca}`)
                    console.log(`Gênero: ${pet.getGenero}`)
                    if(pet.getProdutosConsumidos.length > 0) {
                        console.log(`Produtos consumidos:`)
                        pet.getProdutosConsumidos.forEach(produto => {
                            console.log(produto.nome)
                        }) 
                    }
                    if(pet.getServicosConsumidos.length > 0) {
                        console.log(`Serviços consumidos:`)
                        pet.getServicosConsumidos.forEach(servico => {
                            console.log(servico.nome)
                        }) 
                    }
                    console.log(`--------------------------------------`)
                })
            }
        })
        console.log(`\n`)
    }
}