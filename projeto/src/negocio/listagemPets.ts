import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    
    public listar(): void {
        console.log(`\nInício da listagem de pets:`)
        this.clientes.forEach(cliente => {
            if (cliente.getPets.length > 0){
                cliente.getPets.forEach(pet => {
                    console.log(`Nome: ${pet.getNome}`)
                    console.log(`Tipo: ${pet.getTipo}`)
                    console.log(`Raça: ${pet.getRaca}`)
                    console.log(`Gênero: ${pet.getGenero}`)
                    console.log(`--------------------------------------`)
                })
            }
        })
    }
}