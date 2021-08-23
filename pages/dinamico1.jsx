export async function getServerSideProps(){
    console.log('asduasduashdiuadh')
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return(
        <div>
            <h1>Dinamico 1</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}