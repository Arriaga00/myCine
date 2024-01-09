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
        <button className='rounded-full px-3 py-1 flex items-center ml-14 hover:-translate-y-2 hover:text-sky-700  ease-in-out duration-300' onClick={inicio}  style={color}> <FontAwesomeIcon icon={faArrowLeft} /></button>
        </div>
        {detalle && (
          
          <section className="text-gray-400  body-font">
          <div className="container pl-14 py-10 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt={detalle.imagen} className="object-cover object-center h-[436px] w-[576px]" src={detalle.imagen} />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">Actores</h2>
                  <p className="leading-relaxed text-base">{detalle.actores}</p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">Descripcion:</h2>
                  <p className="leading-relaxed text-base">{detalle.descripcion}</p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">Calificacion</h2>
                  <p className="leading-relaxed text-base">{detalle.calificacion}</p>
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
