import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../abstrato/listagem";

export default class ListagemPSPet extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listaProdTipo(): void {

    }

    public listar(): void {
        console.log(`\n------------------------------`)
        console.log(`1 - Produtos`)
        console.log(`2 - Serviços`)
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        let opcTR
        switch(opc) {
            case 1:
                console.log(`\n1 - Tipo do Pet`)
                console.log(`2 - Raça do Pet`)
                opcTR = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                let quantidade: Array<Array<number>>  = [[]]
                let produtos: Array<Array<number>> = [[]]
                let index = 0
                switch(opcTR) {
                    case 1:
                        let tipo: Array<string> = []
                        this.clientes.forEach(cliente => {
                            cliente.getPets.forEach((pet) => {
                                pet.getProdutosConsumidos.forEach(produto => {
                                    // se já existe o tipo do pet
                                    if(tipo.includes(pet.getTipo)){
                                        // se já tem um produto
                                        let indexMerda = tipo.indexOf(pet.getTipo)
                                        if(produtos[indexMerda].includes(produto.id)) {
                                            let idx = produtos[indexMerda].indexOf(produto.id)
                                            quantidade[indexMerda][idx]++
                                        }else {
                                            produtos[indexMerda].push(produto.id)
                                            quantidade[indexMerda].push(1)
                                        }
                                    }else {
                                        produtos.push([]);
                                        quantidade.push([]);
                                        tipo.push(pet.getTipo)
                                        produtos[index].push(produto.id)
                                        quantidade[index].push(1)
                                        index++
                                    }
                                })
                            })
                        })
                        quantidade.splice(-1,1)
                        produtos.splice(-1,1)
                        let copyP = [...produtos]
                        let copyT = [...tipo]
                        // FOR para tipo
                        for(let c = 0; c < copyT.length; c++) {
                            console.log(`------------------------------`);
                            console.log(`${tipo[c]}`)
                            // FOR para ID e quantidade
                            for(let k = 0; k <= copyP[c].length; k++) {
                                let max = quantidade[c].reduce(function(a,b) {
                                    return Math.max(a,b)
                                }, -Infinity)
                                let i = quantidade[c].indexOf(max)
                                console.log(`${k+1} - ID: ${produtos[c][i]} | QUANTIDADE: ${quantidade[c][i]}`)
                                produtos[c].splice(i,1)
                                quantidade[c].splice(i,1)
                            }
                        }
                        break;
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    case 2: 
                        let raca: Array<string> = []
                        this.clientes.forEach(cliente => {
                            cliente.getPets.forEach((pet) => {
                                pet.getProdutosConsumidos.forEach(produto => {
                                    // se já existe o tipo do pet
                                    if(raca.includes(pet.getRaca)){
                                        // se já tem um produto
                                        let indexMerda = raca.indexOf(pet.getRaca)
                                        if(produtos[indexMerda].includes(produto.id)) {
                                            let idx = produtos[indexMerda].indexOf(produto.id)
                                            quantidade[indexMerda][idx]++
                                        }else {
                                            produtos[indexMerda].push(produto.id)
                                            quantidade[indexMerda].push(1)
                                        }
                                    }else {
                                        produtos.push([]);
                                        quantidade.push([]);
                                        raca.push(pet.getRaca)
                                        produtos[index].push(produto.id)
                                        quantidade[index].push(1)
                                        index++
                                    }
                                })
                            })
                        })
                        quantidade.splice(-1,1)
                        produtos.splice(-1,1)
                        let copyPr = [...produtos]
                        let copyR = [...raca]
                        // FOR para tipo
                        for(let c = 0; c < copyR.length; c++) {
                            console.log(`------------------------------`);
                            console.log(raca[c])
                            // FOR para ID e quantidade
                            for(let k = 0; k <= copyPr[c].length; k++) {
                                let max = quantidade[c].reduce(function(a,b) {
                                    return Math.max(a,b)
                                }, -Infinity)
                                let i = quantidade[c].indexOf(max)
                                console.log(`${k+1} - ID: ${produtos[c][i]} | QUANTIDADE: ${quantidade[c][i]}`)
                                produtos[c].splice(i,1)
                                quantidade[c].splice(i,1)
                            }
                        }
                        break;
                }
                break;
            //////////////////////////////////////////////////////////////////////////////////////////////
            case 2:
                console.log(`\n1 - Tipo do Pet`)
                console.log(`2 - Raça do Pet`)
                opcTR = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
                let servicos: Array<Array<number>> = [[]]
                let quantidade1: Array<Array<number>> = [[]]
                switch(opcTR) {
                    case 1:
                        let tipo: Array<string> = []
                        this.clientes.forEach(cliente => {
                            cliente.getPets.forEach((pet) => {
                                pet.getServicosConsumidos.forEach(servico => {
                                    // se já existe o tipo do pet
                                    if(tipo.includes(pet.getTipo)){
                                        // se já tem um servico
                                        let indexMerda = tipo.indexOf(pet.getTipo)
                                        if(servicos[indexMerda].includes(servico.id)) {
                                            let idx = servicos[indexMerda].indexOf(servico.id)
                                            quantidade1[indexMerda][idx]++
                                        }else {
                                            servicos[indexMerda].push(servico.id)
                                            quantidade1[indexMerda].push(1)
                                        }
                                    }else {
                                        servicos.push([]);
                                        quantidade1.push([]);
                                        tipo.push(pet.getTipo)
                                        servicos[index].push(servico.id)
                                        quantidade1[index].push(1)
                                        index++
                                    }
                                })
                            })
                        })
                        quantidade1.splice(-1,1)
                        servicos.splice(-1,1)
                        let copyP = [...servicos]
                        let copyT = [...tipo]
                        // FOR para tipo
                        for(let c = 0; c < copyT.length; c++) {
                            console.log(`------------------------------`);
                            console.log(`${tipo[c]}`)
                            // FOR para ID e quantidade
                            for(let k = 0; k <= copyP[c].length; k++) {
                                let max = quantidade1[c].reduce(function(a,b) {
                                    return Math.max(a,b)
                                }, -Infinity)
                                let i = quantidade1[c].indexOf(max)
                                console.log(`${k+1} - ID: ${servicos[c][i]} | QUANTIDADE: ${quantidade1[c][i]}`)
                                servicos[c].splice(i,1)
                                quantidade1[c].splice(i,1)
                            }
                        }
                        break;
                    case 2:
                        let raca: Array<string> = []
                        this.clientes.forEach(cliente => {
                            cliente.getPets.forEach((pet) => {
                                pet.getServicosConsumidos.forEach(servico => {
                                    // se já existe o tipo do pet
                                    if(raca.includes(pet.getRaca)){
                                        // se já tem um servico
                                        let indexMerda = raca.indexOf(pet.getRaca)
                                        if(servicos[indexMerda].includes(servico.id)) {
                                            let idx = servicos[indexMerda].indexOf(servico.id)
                                            quantidade1[indexMerda][idx]++
                                        }else {
                                            servicos[indexMerda].push(servico.id)
                                            quantidade1[indexMerda].push(1)
                                        }
                                    }else {
                                        servicos.push([]);
                                        quantidade1.push([]);
                                        raca.push(pet.getRaca)
                                        servicos[index].push(servico.id)
                                        quantidade1[index].push(1)
                                        index++
                                    }
                                })
                            })
                        })
                        quantidade1.splice(-1,1)
                        servicos.splice(-1,1)
                        let copyPr = [...servicos]
                        let copyR = [...raca]
                        // FOR para tipo
                        for(let c = 0; c < copyR.length; c++) {
                            console.log(`------------------------------`);
                            console.log(raca[c])
                            // FOR para ID e quantidade1
                            for(let k = 0; k <= copyPr[c].length; k++) {
                                let max = quantidade1[c].reduce(function(a,b) {
                                    return Math.max(a,b)
                                }, -Infinity)
                                let i = quantidade1[c].indexOf(max)
                                console.log(`${k+1} - ID: ${servicos[c][i]} | QUANTIDADE: ${quantidade1[c][i]}`)
                                servicos[c].splice(i,1)
                                quantidade1[c].splice(i,1)
                            }
                        }
                        break;
                }
                break;
        }
        console.log(`------------------------------\n`)
    }
}