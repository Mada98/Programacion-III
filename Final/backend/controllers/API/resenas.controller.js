const { Resenas } = require('../../models/sqlite/entities/resenas.entity')

exports.listaResenas = async (req, res) => {
    try{
        const resena = await Resenas.listResena()
        res.status(200).send(resena)
    }catch (error) {
        res.status(500).json({messsage: 'Error al obtener los datos de la reseña'})
    }
}
exports.createResenaN = async (req, res) => {
    try{
        const {id_libro, resena} = req.body
        const rese = await Resenas.createResena(id_libro, resena)
        res.status(201).json(rese)
    }catch (error) {
        if (error.messsage === 'Error: No existe un libro con este id') {
            return res.status(404).json({messsage: 'Libro no encontrado'})
        }
        res.status(400).json({messsage: 'Error: al crear una reseña'})
    }
}