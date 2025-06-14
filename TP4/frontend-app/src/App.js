import './App.css';
import { useState, useEffect } from 'react';

function TraerPersonas() {
  const [personas, setPersonas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        setLoading(true)
        const personaData = await fetch('http://localhost:3001/personas')

        if (!personaData) {
          throw new Error('Error al obtener los usuarios')
        }
        const data = await personaData.json()
        setPersonas(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsuarios()
  }, [])

  return { personas, loading, error }
}

function ListaTarjetas() {
  const { personas, loading, error } = TraerPersonas()

  if (loading) {
    return <h2>Cargando personas...</h2>
  }
  if (error) {
    return <h2>Error al obtener los datos de las personas: {error}</h2>
  }
  return (
    <>
      <h2>Lista de Personas</h2>
      <ul>
        {personas.map(persona => (
          tarjetaPersona(persona.id, persona.nombre, persona.apellido, persona.edad, persona.email)
        ))}
      </ul>
    </>
  )
}

function tarjetaPersona(id , nombre, apellido, edad, email) {
  return (
    <li>ID: {id} | Nombre: {nombre} | Apellido: {apellido} | Edad: {edad} | Email: {email}</li>
  )
}

function App() {
  return (
    <div>
      <ListaTarjetas />
    </div>
  );
}

export default App;
