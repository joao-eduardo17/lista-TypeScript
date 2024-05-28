import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Altera from "../abstrato/altera"

export default class AlteraCliente extends Altera {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public alterar(): void {
        let altera = false
        console.log(`\n------------------------------`)
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que deseja alterar: `)
        this.clientes.forEach((cliente, index) => {
            if (cliente.getCpf.getValor === cpf) {
                let pets = [...cliente.getPets]
                let produtos = [...cliente.getProdutosConsumidos]
                let servicos = [...cliente.getServicosConsumidos]
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                let valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let rg = new RG(valor, dataEmissao);
                let numero = this.entrada.receberTexto(`Por favor informe o seu número de telefone no modelo 12987654321: `)
                let ddd = numero.slice(0,2)
                numero = numero.slice(2)
                let telefone = new Telefone(ddd, numero)
                let newCliente = new Cliente(nome, nomeSocial, cliente.getCpf, rg, telefone)
                this.clientes.splice(index, 1, newCliente)
                // Insere todos os pets
                for(let c = 0; c < pets.length; c++) {
                    newCliente.getPets.push(pets[c])
                }
                produtos.forEach((produto) => {newCliente.getProdutosConsumidos.push(produto)})
                servicos.forEach((servico) => {newCliente.getServicosConsumidos.push(servico)})


                console.log(`\nCliente alterado com sucesso`)
                altera = true
            }
        })
        if (!altera) {
            console.log(`\nCPF não encontrado`)
        }
        console.log(`------------------------------\n`)
    }
}