export async function agregarResena(nuevoResena) {
  const respuesta = await fetch("http://localhost:3001/api/resena", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoResena),
  });

  if (!respuesta.ok) {
    throw new Error('Error realizar una reseña');
  }

  return await respuesta.json();
}