export async function getServerSideProps() {
    console.log("asdsaddaddsaddas")

    const produtos = await fetch('http://localhost:3000/api/produtos').then(res => res.json())

    return {
        props: {
            produtos
        }
    }
}



export default function Estatico4(props) {
    console.log("Clienteeeeee")

    const listaDeProdutos = () => props.produtos.map(produto => <li key={produto.id}>{produto.id} {produto.nome} : R$ {produto.preco} </li>)

    return (
        <div>
            <h1>Dinamico 2</h1>
            <ul>
                {listaDeProdutos()}
            </ul>
        </div>
    )
}