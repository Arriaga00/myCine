  import { useEffect } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


  const color = { 
    border: 'solid 1.5px var(--color-terceario)',
    background: 'var( --color-primario)'
  }


  const DetallesCard = (props) => {
    let { name } = useParams();
    name = name.replace(/-/g, ' ');

    const history = useNavigate()
    const inicio = ()=>{
      history('/')
    }

      useEffect(() => {
          props.setTitulo(name);
      }, [name]);


    return (
      <>
          <div className='flex text-2xl font-bold justify-between tracking-widest '>
          <button className='rounded-full px-3 py-1 flex items-center ml-16 hover:-translate-y-2 ease-in-out duration-300' onClick={inicio}  style={color}> <FontAwesomeIcon icon={faArrowLeft} /></button>
              <h2 className='text-center mr-16'>Informacion</h2>
          </div>
      </>
    );
  };

  export default DetallesCard;
