import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
// import FormularioCadastroCliente from "./formularioCadastroCliente";
import Homepage from "./homepage";
import Clientes from "./clientes";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Servicos', 'Adições', 'Listagens']} />
        if(this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <Clientes />
                </>
            )
        }if(this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Homepage />
                </>
            )
        }
    }
}