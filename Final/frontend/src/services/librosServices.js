

export async function agregarLibro(nuevoLibro) {
  const respuesta = await fetch("http://localhost:3001/api/libro", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoLibro),
  });

  if (!respuesta.ok) {
    throw new Error('Error al crear libro');
  }

  return await respuesta.json();
}

export async function eliminarLibro(id) {
  const respuesta = await fetch(`http://localhost:3001/api/libro/${id}`, {
    method: 'DELETE',
  });

  if (!respuesta.ok) {
    throw new Error('No se pudo eliminar el libro');
  }
}


export async function editarLibro(id, newEstado) {
  const respuesta = await fetch(`http://localhost:3001/api/libro/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ estado: newEstado}),
  });

  if (!respuesta.ok) {
    throw new Error('Error al editar el libro');
  }

  return await respuesta.json();
}


