import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AlteraCliente from "../negocio/alteraCliente";
import AlteraPet from "../negocio/alteraPet";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import DeletaCliente from "../negocio/deletaCliente";
import DeletaPet from "../negocio/deletaPet";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPet from "../negocio/listagemPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            // CRUD DOS CLIENTES
            console.log(`\n1 - Cadastrar cliente`)
            console.log(`2 - Listar clientes`)
            console.log(`3 - Alterar cliente`)
            console.log(`4 - Deletar cliente`)
            let opcCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcCliente){
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
            switch (opcPet){
                case 1:
                    let cadastroPet = new CadastroPet(empresa.getClientes)
                    cadastroPet.cadastrar()
                    break;
                case 2:
                    let listaPet = new ListagemPet(empresa.getClientes)
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
            }
    }
}