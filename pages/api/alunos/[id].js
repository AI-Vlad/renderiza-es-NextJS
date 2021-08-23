export default function handler(req,res) {
console.log(req.query.id)


    const id = +req.query.id
    
    res.status(200).json({
        id,
        nome: `Nextinho JS ${id}`,
        email: `nextinhojunior${id}@gmail.com`,
    })
}