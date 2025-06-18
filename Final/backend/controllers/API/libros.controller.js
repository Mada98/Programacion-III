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

exports.updateLibro = async (req, res) => {
    try {
        const { nombre, autor, genero, estado, rating } = req.body
        const libro = await Libro.updateLibro(req.params.id, nombre, autor, genero, estado, rating)
        res.status(200).json(libro)
    } catch (error) {
        if (error.message === 'Error: no existe un libro con este id') {
            return res.status(404).json({ message: 'Libro no encontrado' })
        }
        res.status(400).json({ message: error.message })
    }
}

exports.deleteLibro = async (req, res) => {
    try {
        await Libro.deleteLibro(req.params.id)
        res.status(201).json({ message: 'Libro Eliminado' })
    } catch (error) {
        if (error.message === 'Error: no existe un libro con este id') {
            return res.status(404).json({ message: 'Libro no encontrado' })
        }
        res.status(500).json({ message: error.message })
    }
}