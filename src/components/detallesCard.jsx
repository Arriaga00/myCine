import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Informacion from '../data/apidescripcion.json'

const color = { 
  border: 'solid 1.5px var(--color-terceario)',
  background: 'var( --color-primario)'
}

const DetallesCard = (props) => {
  
  let { name } = useParams();
  name = name.replace(/-/g, ' ');

  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    props.setTitulo(name);
    const peliculaFiltrada = Informacion.find(pelicula => pelicula.titulo === name);
    setDetalle(peliculaFiltrada);
  }, [name]);

  const navegacion = useNavigate()
  const inicio = ()=>{
    navegacion('/')
    props.setTitulo('Películas')
  }

  return (
    <>
        <div className='flex text-2xl font-bold justify-between tracking-widest '>
        <button className='rounded-full px-3 py-1 flex items-center  hover:-translate-y-2 hover:text-sky-700  ease-in-out duration-300' onClick={inicio}  style={color}> <FontAwesomeIcon icon={faArrowLeft} /></button>
        </div>
        {detalle && (
          <section className="text-gray-400  body-font">
          <div className="container  py-10 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt={detalle.imagen} className="object-cover object-center h-[436px] w-[576px]" src={detalle.imagen} />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-5 lg:items-start items-center">
                <div className="flex-grow mb-10">
                  <h2 className="text-white text-lg title-font font-medium mb-3   ">Actores</h2>
                  <p className="leading-relaxed text-base">{detalle.actores}</p>
                </div>
              </div>
              <div className="flex flex-col mb-5 lg:items-start items-center">
                <div className="flex-grow mb-10">
                  <h2 className="text-white text-lg title-font font-medium mb-3">Descripcion:</h2>
                  <p className="leading-relaxed text-base">{detalle.descripcion}</p>
                </div>
              </div>
              <div className="flex flex-col mb-5 lg:items-start items-center w-full">
                <div className="flex-grow flex flex-row justify-between gap-x-5">
                  <div>
                    <h2 className="text-white text-lg title-font font-medium mb-1">Calificacion</h2>
                    <div className='flex'>
                      <p className="leading-relaxed text-base mb-2">{detalle.calificacion}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-[#edc748]" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                   </div>
                  </div>
                  <div>
                    <h2 className="text-white text-lg title-font font-medium mb-1">Genero</h2>
                    <div className='flex flex-col'>
                      <p className="leading-relaxed text-base mb-2">{detalle.genero}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-lg title-font font-medium mb-1">Duracion</h2>
                    <div className='flex flex-col'>
                      <p className="leading-relaxed text-base mb-2">{detalle.duracion}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-lg title-font font-medium mb-1">Año</h2>
                    <div className='flex flex-col'>
                      <p className="leading-relaxed text-base mb-2">{detalle.año}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        )}
    </>
  );
};

export default DetallesCard;
