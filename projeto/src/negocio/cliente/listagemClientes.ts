import Cliente from "../modelo/cliente";
import Listagem from "./abstrato/listagem";


export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\n------------------------------`);
        console.log(`Listagem de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RGs: ${cliente.getRgs}`);
            console.log(`Telefones: ${cliente.getTelefones}`);
            if(cliente.getPets.length > 0) {
                console.log(`Pets:`)
                cliente.getPets.forEach(pet => {
                    console.log(pet.getNome)
                })
            }
            if(cliente.getProdutosConsumidos.length > 0) {
                console.log(`Produtos consumidos:`)
                cliente.getProdutosConsumidos.forEach(prduto => {
                    console.log(prduto.nome)
                })
            }
            if(cliente.getServicosConsumidos.length > 0) {
                console.log(`Serviços consumidos:`)
                cliente.getServicosConsumidos.forEach(servico => {
                    console.log(servico.nome)
                })
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}