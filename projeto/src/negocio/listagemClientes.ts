import Cliente from "../modelo/cliente";
import Listagem from "./listagem";


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
            // console.log(`Pets: ${cliente.getPets}`)
            //Listar pets
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}