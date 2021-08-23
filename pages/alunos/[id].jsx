

export async function getStaticPaths(params) {

    const ids = await fetch('http://localhost:3000/api/alunos/tutores').then(res => res.json()).catch(err => console.error(err))
    const paths = ids.map(id => {
        return { params: { id: `${id}` } }
    })


    return {
        fallback: true,
        paths
    }
}

export async function getStaticProps({ params }) {



    console.log(params.id)

    const aluno = await fetch(`http://localhost:3000/api/alunos/${params.id}`).then(res => res.json()).catch(err => console.error(err))



    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {

    const { aluno } = props

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {aluno ?
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
                : false
            }

        </div>
    )
}

