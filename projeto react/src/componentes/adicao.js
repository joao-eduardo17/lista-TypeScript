import FormPSCliente from "./adicao/formPSCliente"
import FormPSPet from "./adicao/formPSPet"
import FormRgTel from "./adicao/formRgTel"

export default function Adicao() {
    const div = {
        margin: "1rem"
    }
    return(
        <main style={div}>
            <h2>Vincular produto e servico ao cliente</h2>
            <FormPSCliente tema="#e3f2fd"/>

            <hr/>

            <h2>Vincular produto e servico ao pet</h2>
            <FormPSPet tema="#e3f2fd"/>

            <hr/>

            <h2>Vincular RG e Telefone</h2>
            <FormRgTel tema="#e3f2fd" />
        </main>
    )
}