import { Component } from "react";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import ListaProdutos from "./produto/listaProdutos";
import AlteraProdutos from "./produto/alteraProdutos";
import DeletarProdutos from "./produto/deletaProduto";

export default class Produtos extends Component {

    render() {
        const div = {
            marginLeft: "1rem"
        }
        return(
            <>
                <main style={div}>
                    <h1>Cadastro</h1>
                    <FormularioCadastroProduto tema="#e3f2fd" />

                    <hr/>

                    <h1>Listagem</h1>
                    <ListaProdutos tema="" />

                    <hr/>

                    <h1>Alteração</h1>
                    <AlteraProdutos tema="#e3f2fd" />

                    <hr/>

                    <h1>Deletar</h1>
                    <DeletarProdutos tema="#e3f2fd" />
                </main>
            </>
        );
    }
}