

async function agregarLibro (nuevoLibro){
    try {
        setLoading(true)
        const respuesta = await fetch("http://localhost:3001/libros", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nuevoLibro),
        });

        if(!respuesta.ok) {
            throw new Error('Error al crear libro')
        }

        const libroCreado = await respuesta.json();

        setLibros(prev => [...prev, libroCreado]);

        return libroCreado;

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
}

async function editarLibro (id, datosActualizados) {
    try {
        setLoading(true);
        const respuesta = await fetch(`http://localhost:3001/libros/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados),
        });

        if (!respuesta.ok) {
            throw new Error('Error al editar el libro');
        }

        const libroEditado = await respuesta.json();

        setLibros(prev =>
            prev.map(libro => libro.id === id ? libroEditado : libro)
        );

        return libroEditado;
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}

async function eliminarLibro(id) {
    try {
        setLoading(true);
        const respuesta = await fetch(`http://localhost:3001/libros/${id}`, {
            method: 'DELETE',
        });

        if (!respuesta.ok) {
            throw new Error('Error al eliminar el libro');
        }

        setLibros(prev => prev.filter(libro => libro.id !== id));

        return true;
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}



export default {agregarLibro, editarLibro, eliminarLibro}

