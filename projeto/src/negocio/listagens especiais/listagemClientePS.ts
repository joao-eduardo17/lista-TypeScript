import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../abstrato/listagem";

export default class ListagemClientePS extends Listagem {
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

    public listaProdutoQuantidade(): void {
        let nomes: Array<string> = []
        let quantidade: Array<number> = []
        this.clientes.forEach(cliente => {
            if(cliente.getProdutosConsumidos.length > 0) {
                nomes.push(cliente.nome)
                quantidade.push(cliente.getProdutosConsumidos.length)
            }
        })
        if(nomes.length <= 10) {
            let copyNomes = [...nomes]
            for(let c = 1; c <= copyNomes.length; c++){
                let max = quantidade.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = quantidade.indexOf(max)
                console.log(`${c} - ${nomes[i]}: ${quantidade[i]}`)
                // console.log(nomes)
                // console.log(quantidade)
                nomes.splice(i, 1)
                quantidade.splice(i, 1)
            }
        }else {
            for(let c = 1; c <= 10; c++) {
                let max = quantidade.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = quantidade.indexOf(max)
                console.log(`${c} - ${nomes[i]}: ${quantidade[i]}`)
                nomes.splice(i, 1)
                quantidade.splice(i, 1)
            }
        }
    }

    public listaServicoQuantidade(): void {
        let nomes: Array<string> = []
        let quantidade: Array<number> = []
        this.clientes.forEach(cliente => {
            if(cliente.getServicosConsumidos.length > 0) {
                nomes.push(cliente.nome)
                quantidade.push(cliente.getServicosConsumidos.length)
            }
        })
        if(nomes.length) {
            let copyNomes = [...nomes]
            for(let c = 1; c <= copyNomes.length; c++) {
                let max = quantidade.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = quantidade.indexOf(max)
                console.log(`${c} - ${nomes[i]}: ${quantidade[i]}`)
                nomes.splice(i, 1)
                quantidade.splice(i, 1)
            }
        }else {
            for(let c = 1; c <= 10; c++) {
                let max = quantidade.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = quantidade.indexOf(max)
                console.log(`${c} - ${nomes[i]}: ${quantidade[i]}`)
                nomes.splice(i, 1)
                quantidade.splice(i, 1)
            }
        }
    }

    public listaProdutoValor(): void {
        let nomes: Array<String> = []
        let valores: Array<number> = []
        this.clientes.forEach(cliente => {
            if(cliente.getServicosConsumidos.length > 0) {
                let valor = 0
                nomes.push(cliente.nome)
                cliente.getServicosConsumidos.forEach(servico => {
                    valor+=servico.preco
                })
                valores.push(valor)
            }
        })
        if(nomes.length <= 5) {
            let copyNomes = [...nomes]
            for(let c = 1; c <= copyNomes.length; c++) {
                let max = valores.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = valores.indexOf(max)
                console.log(`${c} - ${nomes[i]}: R$${valores[i]}`)
                nomes.splice(i, 1)
                valores.splice(i, 1)
            }
        }else {
            for(let c = 1; c <= 5; c++) {
                let max = valores.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = valores.indexOf(max)
                console.log(`${c} - ${nomes[i]}: R$${valores[i]}`)
                nomes.splice(i, 1)
                valores.splice(i, 1)
            }
        }
    }

    public listaServicoValor(): void {
        let nomes: Array<String> = []
        let valores: Array<number> = []
        this.clientes.forEach(cliente => {
            if(cliente.getProdutosConsumidos.length > 0) {
                let valor = 0
                nomes.push(cliente.nome)
                cliente.getProdutosConsumidos.forEach(produto => {
                    valor+=produto.preco
                })
                valores.push(valor)
            }
        })
        if(nomes.length <= 5) {
            let copyNomes = [...nomes]
            for(let c = 1; c <= copyNomes.length; c++) {
                let max = valores.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = valores.indexOf(max)
                console.log(`${c} - ${nomes[i]}: R$${valores[i]}`)
                nomes.splice(i, 1)
                valores.splice(i, 1)
            }
        }else {
            for(let c = 1; c <= 5; c++) {
                let max = valores.reduce(function(a,b) {
                    return Math.max(a,b)
                }, -Infinity)
                let i = valores.indexOf(max)
                console.log(`${c} - ${nomes[i]}: R$${valores[i]}`)
                nomes.splice(i, 1)
                valores.splice(i, 1)
            }
        }
    }

    public listar(): void {
        console.log(`\n------------------------------`)
        console.log(`1 - Quantidade`) // 10
        console.log(`2 - Valor`) // 5
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        switch(opc) {
            case 1:
                console.log(`\n1 - Listagem por produto`)
                console.log(`2 - Listagem por serviço`)
                opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(opc) {
                    case 1:
                        this.listaProdutoQuantidade()
                        break;
                    case 2:
                        this.listaServicoQuantidade()
                        break;
                }
                break;
            case 2:
                console.log(`\n1 - Listagem por produto`)
                console.log(`2 - Listagem por serviço`)
                opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch(opc) {
                    case 1:
                        this.listaProdutoValor()
                        break;
                    case 2:
                        this.listaServicoValor()
                        break;
                }
                break;
        }
        console.log(`------------------------------\n`)
    }
}