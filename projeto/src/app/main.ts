import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AlteraCliente from "../negocio/alteraCliente";
import AlteraPet from "../negocio/alteraPet";
import AlteraProduto from "../negocio/alteraProduto";
import AlteraServico from "../negocio/alteraServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeletaCliente from "../negocio/deletaCliente";
import DeletaPet from "../negocio/deletaPet";
import DeletaProduto from "../negocio/deletaProduto";
import DeletaServico from "../negocio/deletaServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`)
    console.log(`4 - Serviços`) 
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
        case 0:
            execucao = false
            console.log(`\nAté mais!`)
            break;
    }
}