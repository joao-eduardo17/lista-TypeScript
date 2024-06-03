import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import Cadastro from "../abstrato/cadastro"

export default class CadastroPSPet extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n------------------------------`)
        console.log(`1 - Produto`)
        console.log(`2 - Serviço`)
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        let vincula = false
        let cpf: string
        switch(opc) {
            case 1:
                cpf = this.entrada.receberTexto(`Digite o CPF do dono: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let nome = this.entrada.receberTexto(`Digite o nome do Pet: `).toLowerCase()
                        cliente.getPets.forEach(pet => {
                            if(pet.getNome.toLowerCase() === nome) {
                                let id = this.entrada.receberNumero(`Digite o ID do produto: `)
                                this.produtos.forEach(produto => {
                                    if(produto.id === id) {
                                        pet.getProdutosConsumidos.push(produto)
                                        console.log(`\nProduto ${id} vinculado ao pet ${pet.getNome} do(a) cliente ${cliente.nome}`)
                                        vincula = true
                                    }
                                })
                            }
                        })
                    }
                })
                break
            case 2:
                cpf = this.entrada.receberTexto(`Digite o CPF do dono: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let nome = this.entrada.receberTexto(`Digite o nome do Pet: `).toLowerCase()
                        cliente.getPets.forEach(pet => {
                            if(pet.getNome.toLowerCase() === nome) {
                                let id = this.entrada.receberNumero(`Digite o ID do serviço: `)
                                this.servicos.forEach(servico => {
                                    if(servico.id === id) {
                                        pet.getServicosConsumidos.push(servico)
                                        console.log(`\nServiço ${id} vinculado ao pet ${pet.getNome} do(a) cliente ${cliente.nome}`)
                                        vincula = true
                                    }
                                })
                            }
                        })
                    }
                })
                break;
        }
        if(!vincula) {
            console.log(`\nCPF, ID ou nome não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}