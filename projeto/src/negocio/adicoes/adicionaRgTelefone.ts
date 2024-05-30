import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../abstrato/cadastro";

export default class AdicionaRgTelefone extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n------------------------------`)
        console.log(`1 - Adicionar Telefone`)
        console.log(`2 - Adicionar RG`)
        let opc = this.entrada.receberNumero(`Por favor, escolha uma opção: `)
        let cpf: string
        let vincula = false
        switch(opc) {
            case 1:
                cpf = this.entrada.receberTexto(`Digite o CPF do cliente: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let telefone = this.entrada.receberTexto(`Digite o número de telefone no formato 12987654321: `)
                        let ddd = telefone.slice(0,2)
                        telefone = telefone.slice(2)
                        let newTelefone = new Telefone(ddd, telefone)
                        cliente.getTelefones.push(newTelefone)
                        console.log(`\nTelefone vinculado com sucesso`)
                        vincula = true
                    }
                })
                if(!vincula) {
                    console.log(`\nCPF não encontrado`)
                }
                break;
            case 2:
                cpf = this.entrada.receberTexto(`Digite o CPF do cliente: `)
                this.clientes.forEach(cliente => {
                    if(cliente.getCpf.getValor === cpf) {
                        let valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        let rg = new RG(valor, dataEmissao);
                        cliente.getRgs.push(rg)
                        console.log(`\nRG vinculado com sucesso`)
                        vincula = true
                    }
                })
                if(!vincula) {
                    console.log(`\nCPF não encontrado`)
                }
                break;
        }
        console.log(`------------------------------\n`)
    }
}