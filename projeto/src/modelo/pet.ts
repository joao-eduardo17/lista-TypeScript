import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private servicosConsumidos: Array<Servico>
    private produtosConsumidos: Array<Produto>

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getServicosConsumidos(){return this.servicosConsumidos}
    public get getProdutosConsumidos(){return this.produtosConsumidos}
}