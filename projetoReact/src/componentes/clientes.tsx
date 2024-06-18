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
                    <h2>Cadastro</h2>
                    <FormularioCadastroCliente tema="#e3f2fd" />

                    <hr/>

                    <h2>Listagem</h2>
                    <ListaCliente tema=""/>

                    <hr/>

                    <h2>Alteração</h2>
                    <AlteraClientes tema="#e3f2fd" />

                    <hr/>

                    {/* <h2>Deletar</h2>
                    <DeletarClientes tema="#e3f2fd" /> */}
                </main>
            </>
        );
    }
}