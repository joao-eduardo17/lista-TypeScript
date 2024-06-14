import AlteraServicos from "./servico/alteraServicos"
import DeletarServicos from "./servico/deletarServicos"
import FormularioCadastroServico from "./servico/formularioCadastroServico"
import ListaServicos from "./servico/listaServicos"

export default function Servicos() {
    const div = {
        marginLeft: "1rem"
    }
    return(
        <main style={div}>
            <h2>Cadastro</h2>
            <FormularioCadastroServico tema="#e3f2fd" />

            <hr/>

            <h2>Listagem</h2>
            <ListaServicos tema="" />

            <hr/>

            <h2>Alteração</h2>
            <AlteraServicos tema="#e3f2fd" />

            <hr/>

            <h2>Deletar</h2>
            <DeletarServicos tema="#e3f2fd" />
        </main>
    )
}