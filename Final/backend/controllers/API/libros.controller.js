const { Libro } = require('../../models/sqlite/entities/libros.entity')

exports.listaLibros = async (req, res) => {
    try {
        const libro = await Libro.listLibro()
        res.status(200).send(libro)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos de los Libros' })
    }
}

exports.createLibro = async (req, res) => {
    try {
        const { nombre, autor, genero, estado, rating } = req.body
        const libro = await Libro.createLibro(nombre, autor, genero, estado, rating)
        res.status(201).json(libro)
    } catch (error) {
        res.status(400).json({ message: 'Error al crear un libro nuevo' })
    }
}