
function numeroAletorio (min = 1, max = 100000){
    return parseInt(Math.random() * (max-min)) + min 
}

export default function handler(req, res) {
    res.status(200).json(
        [
            { id: numeroAletorio(), nome: 'Caneta', preco: 5.60 },
            { id: numeroAletorio(), nome: 'Lapis', preco: 5.60 },
            { id: numeroAletorio(), nome: 'Borracha', preco: 5.60 }
        ])
}
