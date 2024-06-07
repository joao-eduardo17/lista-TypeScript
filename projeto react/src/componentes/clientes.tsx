import { Component } from "react";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaCliente from "./cliente/listaClientes";
import AlteraClientes from "./cliente/alteraClientes";
import DeletarClientes from "./cliente/deletarClientes";

export default class Clientes extends Component {
    render() {
        const div = {
            marginLeft: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h1>Cadastro</h1>
                    <FormularioCadastroCliente tema="#e3f2fd" />

                    <hr/>

                    <h1>Listagem</h1>
                    <ListaCliente tema=""/>

                    <hr/>

                    <h1>Alteração</h1>
                    <AlteraClientes tema="#e3f2fd" />

                    <hr/>

                    <h1>Deletar</h1>
                    <DeletarClientes tema="#e3f2fd" />
                </main>
            </>
        );
    }
}