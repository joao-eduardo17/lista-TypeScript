import { Component } from "react";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import AlteraServicos from "./servico/alteraServicos";
import ListaServicos from "./servico/listaServicos";
import DeletarServicos from "./servico/deletaServicos";

export default class Servicos extends Component {

    render() {
        const div = {
            marginLeft: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h1>Cadastro</h1>
                    <FormularioCadastroServico tema="#e3f2fd" />

                    <hr/>

                    <h1>Listagem</h1>
                    <ListaServicos tema="" />

                    <hr/>

                    <h1>Alteração</h1>
                    <AlteraServicos tema="#e3f2fd" />

                    <hr/>

                    <h1>Deletar</h1>
                    <DeletarServicos tema="#e3f2fd" />
                </main>
            </>
        );
    }
}