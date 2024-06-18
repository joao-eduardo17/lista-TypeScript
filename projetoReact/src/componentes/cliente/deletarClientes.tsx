import { Component } from "react";
import BuscadorClientes from "../api/busca/busca";
import RemovedorCliente from "../api/deleta/deletaCliente";
import RemovedorClienteLocal from "../api/deleta/deletaClienteLocal";

type props = {
    tema: string
}

type state = {
    clientes: Object[]
}

export default class DeletarClientes extends Component<props, state> {
    private id: number
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public capturarId(evento: any) {
        this.id = evento.target.value
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes 
        })
        this.excluirRemoto(id)
    }

    componentDidMount(){
        this.buscarClientes()
    }

    render() {
        let tema = this.props.tema
        return(
            <>
                <main>
                    <form action="">
                        <div className="input-group mb-3">
                            <input onChange={this.capturarId} type="text" className="form-control" placeholder="ID" aria-label="CPF" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Deletar</button>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}