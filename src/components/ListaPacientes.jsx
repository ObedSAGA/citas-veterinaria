import Paciente from "./Paciente"

const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  



  return (
    <div className="md:w-1/2 lg:w-3/5">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-7 text-center">
              Administra tus pacientes {''}
              <span className="text-indigo-600 font-bold">y altas</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
    
            {pacientes.map( paciente => (
                  <Paciente
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                  />
              ))}
          </div>
         </>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-7 text-center">
              Comienza agregando un paciente {''}
              <span className="text-indigo-600 font-bold">y apareceran en este espacio</span>
          </p>
        </>

      )}

     
    </div>
  )
}

export default ListaPacientes
