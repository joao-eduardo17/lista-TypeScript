/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListagemPSCliente() {
    const flex = {
        display: "flex",
        gap: "1rem"
    }
    return(
        <>
            <section style={flex}>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                <select className="form-select" id="inputGroupSelect01">
                    <option selected>Escolha...</option>
                    <option value="1">Produto</option>
                    <option value="2">Serviço</option>
                </select>
                </div>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Opções</label>
                <select className="form-select" id="inputGroupSelect01">
                    <option selected>Escolha...</option>
                    <option value="1">Quantidade</option>
                    <option value="2">Valor</option>
                </select>
                </div>      
            </section>
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5: x | QUANTIDADE: y</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 6: x | QUANTIDADE: y</a>
                </div>
            </div>
        </>
    )
}