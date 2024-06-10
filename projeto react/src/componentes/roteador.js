/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./cliente/listaCliente";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import Homepage from "./homepage";
import Clientes from "./clientes";
import Pets from "./pets";
import Produtos from "./produtos";
import Servicos from "./servicos";
import Adicao from "./adicao";

export default function Roteador() {
    const [tela, setTela] = useState('Home')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }
    
    let navBar = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Adições', 'Listagens']} />

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    {navBar}
                    <Clientes />
                </>
            )
        }if(tela === 'Home') {
            return (
                <>
                    {navBar}
                    <Homepage />
                </>
            )
        }if(tela === 'Pets') {
            return(
                <>
                    {navBar}
                    <Pets />
                </>
            )
        }if(tela === 'Produtos') {
            return(
                <>
                    {navBar}
                    <Produtos />
                </>
            )
        }if(tela === 'Serviços') {
            return(
                <>
                    {navBar}
                    <Servicos />
                </>
            )
        }if(tela === 'Adições') {
            return(
                <>
                    {navBar}
                    <Adicao />
                </>
            )
        }
    }

    return (
        construirView()
    )
}