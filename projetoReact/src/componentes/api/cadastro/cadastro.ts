import { URI } from "../services";
import Cadastrador from "./interfaceCadastro";

class CadastradorCliente implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URI.CADASTRAR_CLIENTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastradorCliente