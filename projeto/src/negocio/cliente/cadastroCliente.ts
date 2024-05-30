import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../abstrato/cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n------------------------------`)
        console.log(`Início do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `)
        data =  this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao)
        let numero = this.entrada.receberTexto(`Por favor informe o seu número de telefone no modelo 12987654321: `)
        let ddd = numero.slice(0,2)
        numero = numero.slice(2)
        let telefone = new Telefone(ddd, numero)
        let cliente = new Cliente(nome, nomeSocial, cpf, rg, telefone);
        let cliente2 = new Cliente("Emi", "a", new CPF("2",dataEmissao), new RG(valor, dataEmissao), new Telefone(ddd, numero))
        this.clientes.push(cliente2)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)`);
        console.log(`------------------------------\n`)
    }
}