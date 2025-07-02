const { Libros } = require('../models');

const getAllLibros = async (req, res) => {
  try {
    const libro  = await Libros.findAll({attributes: ['id', 'nombre', 'autor', 'genero', 'estado', 'rating'], raw: true});
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching libros', message: error.message });
  }
};

const getLibroById = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libros.findByPk(id);
    
    if (!libro) {
      return res.status(404).json({ error: 'libro not found' });
    }
    
    res.json( libro );
  } catch (error) {
    res.status(500).json({ error: 'Error fetching libro', message: error.message });
  }
};

const createLibro = async (req, res) => {
  try {
    const { nombre, autor, genero, estado, rating } = req.body;
    
    const libro = await Libros.create({
      nombre,
      autor,
      genero,
      estado,
      rating
    });
    
    res.status(201).json({ 
      message: 'libro created successfully',
      libro 
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating libro', message: error.message });
  }
};

const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    
    const libro = await Libros.findByPk(id);
    if (!libro) {
      return res.status(404).json({ error: 'libro not found' });
    }
    
    const updatedLibro = await libro.update({
      estado
    });
    
    res.json({
      message: 'libro updated successfully',
      task: updatedLibro
    });
  } catch (error) {
    res.status(400).json({ error: 'Error updating libro', message: error.message });
  }
};

const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libros.findByPk(id);
    
    if (!libro) {
      return res.status(404).json({ error: 'libro not found' });
    }
    
    await libro.destroy();
    res.json({ message: 'libro deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting libro', message: error.message });
  }
};

module.exports = {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
};