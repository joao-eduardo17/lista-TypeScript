import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AdicionaRgTelefone from "../negocio/adicoes/adicionaRgTelefone";
import CadastroPSCliente from "../negocio/adicoes/cadastroPSCliente";
import CadastroPSPet from "../negocio/adicoes/cadastroPSPet";
import AlteraCliente from "../negocio/cliente/alteraCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import DeletaCliente from "../negocio/cliente/deletaCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemClientePS from "../negocio/listagens especiais/listagemClientePS";
import ListagemPS from "../negocio/listagens especiais/listagemPS";
import ListagemPSPet from "../negocio/listagens especiais/listagemPSPet";
import AlteraPet from "../negocio/pet/alteraPet";
import CadastroPet from "../negocio/pet/cadastroPet";
import DeletaPet from "../negocio/pet/deletaPet";
import ListagemPets from "../negocio/pet/listagemPets";
import AlteraProduto from "../negocio/produto/alteraProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import DeletaProduto from "../negocio/produto/deletaProduto";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import AlteraServico from "../negocio/servico/alteraServico";
import CadastroServico from "../negocio/servico/cadastroServico";
import DeletaServico from "../negocio/servico/deletaServico";
import ListagemServicos from "../negocio/servico/listagemServicos";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`)
    console.log(`4 - Serviços`) 
    console.log(`5 - Adições`)
    console.log(`6 - Listagens`)
    console.log(`0 - Sair`);
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch(opcao) {
        case 1:
            // CRUD DOS CLIENTES
            console.log(`\n1 - Cadastrar cliente`)
            console.log(`2 - Listar clientes`)
            console.log(`3 - Alterar cliente`)
            console.log(`4 - Deletar cliente`)
            let opcCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcCliente) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listaCliente = new ListagemClientes(empresa.getClientes)
                    listaCliente.listar()
                    break;
                case 3:
                    let alteraCliente = new AlteraCliente(empresa.getClientes)
                    alteraCliente.alterar()
                    break;
                case 4:
                    let apagaCliente = new DeletaCliente(empresa.getClientes)
                    apagaCliente.deletar()
                    break;
            }break;
        case 2:
            // CRUD DOS PETS
            console.log(`\n1 - Cadastrar pet`)
            console.log(`2 - Listar pets`)
            console.log(`3 - Alterar pet`)
            console.log(`4 - Deletar pet`)
            let opcPet = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcPet) {
                case 1:
                    let cadastroPet = new CadastroPet(empresa.getClientes)
                    cadastroPet.cadastrar()
                    break;
                case 2:
                    let listaPet = new ListagemPets(empresa.getClientes)
                    listaPet.listar()
                    break;
                case 3:
                    let alteraPet = new AlteraPet(empresa.getClientes)
                    alteraPet.alterar()
                    break;
                case 4:
                    let apagaPet = new DeletaPet(empresa.getClientes)
                    apagaPet.deletar()
                    break;
            }break;
        case 3:
            // CRUD DOS PRODUTOS
            console.log(`\n1 - Cadastrar produto`)
            console.log(`2 - Listar produtos`)
            console.log(`3 - Alterar produto`)
            console.log(`4 - Deletar produto`)
            let opcProduto = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcProduto) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listaProduto = new ListagemProdutos(empresa.getProdutos)
                    listaProduto.listar()
                    break;
                case 3:
                    let alteraProduto = new AlteraProduto(empresa.getProdutos)
                    alteraProduto.alterar()
                    break;
                case 4:
                    let apagaProduto = new DeletaProduto(empresa.getProdutos)
                    apagaProduto.deletar()
                    break;
            }break;
        case 4:
            // CRUD DOS SERVIÇOS
            console.log(`\n1 - Cadastrar serviço`)
            console.log(`2 - Listar serviços`)
            console.log(`3 - Alterar serviço`)
            console.log(`4 - Deletar serviço`)
            let opcServico = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcServico) {
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listaServico = new ListagemServicos(empresa.getServicos)
                    listaServico.listar()
                    break;
                case 3:
                    let alteraServico = new AlteraServico(empresa.getServicos)
                    alteraServico.alterar()
                    break;
                case 4:
                    let apagaServico = new DeletaServico(empresa.getServicos)
                    apagaServico.deletar()
                    break;
            }break;
        case 5:
            // ADIÇÕES
            console.log(`\n1 - Vincular produtos ou serviços ao cliente`)
            console.log(`2 - Vincular produtos ou serviços ao pet`)
            console.log(`3 - Adicionar Rg ou número de telefone`)
            let opcAdicao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcAdicao){
                case 1:
                    let vinculaPSCliente = new CadastroPSCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    vinculaPSCliente.cadastrar()
                    break;
                case 2:
                    let vinculaPSPet = new CadastroPSPet(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    vinculaPSPet.cadastrar()
                    break;
                case 3:
                    let adicionaRgTel = new AdicionaRgTelefone(empresa.getClientes)
                    adicionaRgTel.cadastrar()
                    break;
            }break;
        case 6:
            // Listagem diferenciada
            console.log(`\n1 - Clientes que mais consumiram`)
            console.log(`2 - Produtos ou serviços mais consumidos`)
            console.log(`3 - Produtos ou serviços mais consumidos por tipo e raça de pet`)
            let opcListagem = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcListagem) {
                case 1:
                    let listaClientePS = new ListagemClientePS(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    listaClientePS.listar()
                    break;
                case 2:
                    let listaPS = new ListagemPS(empresa.getClientes)
                    listaPS.listar()
                    break;
                case 3:
                    let listaPSPet = new ListagemPSPet(empresa.getClientes)
                    listaPSPet.listar()
                    break;
            }break;
        case 0:
            // execucao = false
            // console.log(`\nAté mais!`)
            // break;
        default:
            console.log(`Operação não correspondida :(\n`)
    }
}