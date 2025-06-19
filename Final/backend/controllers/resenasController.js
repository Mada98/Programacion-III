const { Libros } = require('../models');
const { Resenas } = require('../models');

const getAllResenas = async (req, res) => {
  try {
    const resena  = await Resenas.findAll({attributes: ['id', 'id_libro', 'resena'], raw: true});
    res.status(200).json(resena);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reseña', message: error.message });
  }
};

const getResenaById = async (req, res) => {
  try {
    const { id } = req.params;
    const resena = await Resenas.findByPk(id);
    
    if (!resena) {
      return res.status(404).json({ error: 'resena not found' });
    }
    
    res.json( resena );
  } catch (error) {
    res.status(500).json({ error: 'Error fetching libro', message: error.message });
  }
};

const createResena = async (req, res) => {
  try {
    const { id_libro, resena } = req.body;
    const libro = await Libros.findByPk(id_libro)
    if (!libro){
      return res.status(404).json({ error: 'libro not found' });
    }
    
    const resenaNew = await Resenas.create({
      id_libro,
      resena
    });
    
    res.status(201).json({ 
      message: 'resena created successfully',
      resenaNew 
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating resena', message: error.message });
  }
};

const updateResena = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_libro, resena } = req.body;
    
    const libro = await Libros.findByPk(id_libro);
    if (!libro) {
      return res.status(404).json({ error: 'libro not found' });
    }
    const resenaOld = await Resenas.findByPk(id)
    if (!resenaOld) {
      return res.status(404).json({ error: 'reseña not found' });
    }
    const updatedResena = await resenaOld.update({
      id_libro,
      resena
    });
    
    res.json({
      message: 'Reseña updated successfully',
      task: updatedResena
    });
  } catch (error) {
    res.status(400).json({ error: 'Error updating Reseña', message: error.message });
  }
};

const deleteResena = async (req, res) => {
  try {
    const { id } = req.params;
    const resena = await Resenas.findByPk(id);
    
    if (!resena) {
      return res.status(404).json({ error: 'Reseña not found' });
    }
    
    await resena.destroy();
    res.json({ message: 'Reseña deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting Reseña', message: error.message });
  }
};

module.exports = { 
    getAllResenas,
    getResenaById,
    createResena,
    updateResena,
    deleteResena 
}