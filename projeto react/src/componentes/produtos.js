import AlteraProdutos from "./produto/alteraProdutos"
import DeletarProdutos from "./produto/deletarProdutos"
import FormularioCadastroProduto from "./produto/FormularioCadastroProduto"
import ListaProdutos from "./produto/listaProdutos"

export default function Produtos() {
    const div = {
        marginLeft: "1rem"
    }
    return(
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
    )
}