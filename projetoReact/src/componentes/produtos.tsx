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
                    <h2>Cadastro</h2>
                    <FormularioCadastroProduto tema="#e3f2fd" />

                    <hr/>

                    <h2>Listagem</h2>
                    <ListaProdutos tema="" />

                    <hr/>

                    <h2>Alteração</h2>
                    <AlteraProdutos tema="#e3f2fd" />

                    <hr/>

                    <h2>Deletar</h2>
                    <DeletarProdutos tema="#e3f2fd" />
                </main>
            </>
        );
    }
}