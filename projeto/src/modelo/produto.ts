export default class Produto {
    public id!: number
    public nome!: string

    constructor(id: number, nome: string) {
        this.id = id
        this.nome = nome
    }
}