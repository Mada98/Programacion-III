

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

function editarLibro (){
    
}

function eliminarLibro(){

}