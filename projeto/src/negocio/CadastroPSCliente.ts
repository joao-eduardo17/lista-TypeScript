import { PassThrough } from "stream";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cadastro from "./abstrato/cadastro";

export default class CadastroPSCliente extends Cadastro {
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
        console.log(`1 - Vincular produto`)
        console.log(`2 - Vincular serviço`)
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        let vincula = false
        let cpf: string
        switch(opc){
            case 1:
                cpf = this.entrada.receberTexto(`Digite o cpf do cliente: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let id = this.entrada.receberNumero(`Digite o ID do produto: `)
                        this.produtos.forEach(produto => {
                            if(produto.id === id) {
                                cliente.getProdutosConsumidos.push(produto)
                                console.log(`\nProduto ${id} vinculado ao cliente ${cliente.nome}`)
                                vincula = true
                            }
                        })
                    }
                })
                if(!vincula) {
                    console.log(`\nCPF ou ID não encontrado`)
                }
                break;
            case 2:
                cpf = this.entrada.receberTexto(`Digite o cpf do cliente: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let id = this.entrada.receberNumero(`Digite o ID do servico: `)
                        this.servicos.forEach(servico => {
                            if(servico.id === id) {
                                cliente.getServicosConsumidos.push(servico)
                                console.log(`\nservico ${id} vinculado ao cliente ${cliente.nome}`)
                                vincula = true
                            }
                        })
                    }
                })
                if(!vincula) {
                    console.log(`\nCPF ou ID não encontrado`)
                }
                break;
        }
        console.log(`------------------------------\n`)
    }
}