import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>

    constructor(nome: string, nomeSocial: string, cpf: CPF, rg: RG, telefone: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.rgs.push(rg)
        this.dataCadastro = new Date()
        this.telefones = []
        this.telefones.push(telefone)
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<string> {
        let lista: string[] = []
        this.rgs.forEach(rg => {
            lista.push(rg.getValor)
        })
        return lista
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<string> {
        let lista: string[] = []
        this.telefones.forEach(telefone => {
            lista.push(telefone.getTelefone)
        })
        return lista
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
}