import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  const generateId = () => {
      const id = crypto.randomUUID()
      return id
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      //Validate form submission
      if ([nombre, propietario, email, alta, sintomas].includes('')) {
          setError(true);
          return;
      } 

      setError(false);

      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        alta, 
        sintomas,
      }

      if (paciente.id) {
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
        setPacientes(pacientesActualizados)
        setPaciente({})
      } else {
        objetoPaciente.id = generateId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      //Reiniciar el formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade tus pacientes y {""}
        <span className="text-indigo-600 font-bold">gestiónalos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg m-5 py-10 px-5 mb-10"
      >
        { error && <Error>Todos los campos son obligatorios</Error>}

        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre del paciente
          </label>
          <input 
              id="nombre"
              type="text" 
              placeholder="Nombre del paciente"
              autoComplete="off"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input 
              id="propietario"
              type="text" 
              placeholder="Nombre del propietario"
              autoComplete="off"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
          Correo electrónico
          </label>
          <input 
              id="email" 
              type="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Fecha de alta
          </label>
          <input 
              id="alta" 
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Descripción de los síntomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
              value={paciente.id ? "Editar paciente" : "Agregar paciente"} 
        />
      </form>
    </div>
  );
};

export default Form;
