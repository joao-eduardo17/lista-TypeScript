import Cliente from "./cliente"
import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = [new Cliente("joao", "jonas", new CPF("1", new Date()), new RG("1", new Date()), new Telefone("1", "1")), new Cliente("maria", "silva", new CPF("2", new Date()), new RG("2", new Date()), new Telefone("2", "2")), new Cliente("pedro", "pereira", new CPF("3", new Date()), new RG("3", new Date()), new Telefone("3", "3")), new Cliente("ana", "souza", new CPF("4", new Date()), new RG("4", new Date()), new Telefone("4", "4")), new Cliente("carlos", "oliveira", new CPF("5", new Date()), new RG("5", new Date()), new Telefone("5", "5"))]
        this.produtos = [new Produto(1,"banho", 11), new Produto(2,"tosa", 134)]
        this.servicos = []
    }
    
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
}