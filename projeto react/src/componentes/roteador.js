/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./cliente/listaCliente";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import Homepage from "./homepage";
import Clientes from "./clientes";

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
                    <Clientes tema="#e3f2fd" />
                </>
            )
        }if(tela === 'Home') {
            return (
                <>
                    {navBar}
                    <Homepage />
                </>
            )
        }if(tela === 'Pet') {

        }
    }

    return (
        // console.log(1),
        construirView()
    )
}