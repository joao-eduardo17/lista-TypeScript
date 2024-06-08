import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Homepage from "./homepage";
import Clientes from "./clientes";
import Pets from "./pets";
import Produtos from "./produtos";
import Servicos from "./servicos";
import Adicao from "./adicao";
import Listagem from "./listagem";

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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Adições', 'Listagens']} />
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
        }if(this.state.tela === 'Pets') {
            return(
                <>
                    {barraNavegacao}
                    <Pets />
                </>
            )
        }if(this.state.tela === 'Produtos') {
            return(
                <>
                    {barraNavegacao}
                    <Produtos />
                </>
            )
        }if(this.state.tela === 'Serviços') {
            return(
                <>
                    {barraNavegacao}
                    <Servicos />
                </>
            )
        }if(this.state.tela === 'Adições') {
            return(
                <>
                    {barraNavegacao}
                    <Adicao />
                </>
            )
        }else {
            return(
                <>
                    {barraNavegacao}
                    <Listagem />
                </>
            )
        }
    }
}