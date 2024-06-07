import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listagem from "../abstrato/listagem";

export default class ListagemPS extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\n------------------------------`)
        console.log(`1 - Produtos`)
        console.log(`2 - Serviços`)
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        let ids: Array<number> = []
        let quantidade: Array<number> = []
        switch(opc) {
            case 1:
                this.clientes.forEach(cliente => {
                    cliente.getProdutosConsumidos.forEach(produto => {
                        if(ids.includes(produto.id)) {
                            let index = ids.indexOf(produto.id)
                            quantidade[index]++
                        }else {
                            ids.push(produto.id)
                            quantidade.push(1)
                        }
                    })
                })
                this.clientes.forEach(cliente => {
                    cliente.getPets.forEach(pet => {
                        pet.getProdutosConsumidos.forEach(produto => {
                            if(ids.includes(produto.id)) {
                                let index = ids.indexOf(produto.id)
                                quantidade[index]++
                            }else {
                                ids.push(produto.id)
                                quantidade.push(1)
                            }
                        })
                    })
                })
                let copyId = [...ids]
                for(let c = 1; c <= copyId.length; c++) {
                    let max = quantidade.reduce(function(a,b) {
                        return Math.max(a,b)
                    }, -Infinity)
                    let i = quantidade.indexOf(max)
                    console.log(`${c} - ID: ${ids[i]} | QUANTIDADE: ${quantidade[i]}`)
                    ids.splice(i,1)
                    quantidade.splice(i,1)
                }
                break;
            case 2:
                this.clientes.forEach(cliente => {
                    cliente.getServicosConsumidos.forEach(servico => {
                        if(ids.includes(servico.id)) {
                            let index = ids.indexOf(servico.id)
                            quantidade[index]++
                        }else {
                            ids.push(servico.id)
                            quantidade.push(1)
                        }
                    })
                })
                this.clientes.forEach(cliente => {
                    cliente.getPets.forEach(pet => {
                        pet.getServicosConsumidos.forEach(servico => {
                            if(ids.includes(servico.id)) {
                                let index = ids.indexOf(servico.id)
                                quantidade[index]++
                            }else {
                                ids.push(servico.id)
                                quantidade.push(1)
                            }
                        })
                    })
                })
                let copyId1 = [...ids]
                for(let c = 1; c <= copyId1.length; c++) {
                    let max = quantidade.reduce(function(a,b) {
                        return Math.max(a,b)
                    }, -Infinity)
                    let i = quantidade.indexOf(max)
                    console.log(`${c} - ID: ${ids[i]} | QUANTIDADE: ${quantidade[i]}`)
                    ids.splice(i,1)
                    quantidade.splice(i,1)
                }
                break;
        }
        console.log(`------------------------------\n`)
    }
}