
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const color = { 
    border: 'solid 1.5px var(--color-terceario)',
    background: 'var( --color-primario)'
}

function Busqueda ({buscar,setBuscar}) {

    const buscando = (e)=>{
      setBuscar(e.target.value)
    }



    return (
        <div className="flex justify-center items-center gap-2 w-full pr-4">
          <label htmlFor="logo" className="p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 mt-3">
            <FontAwesomeIcon icon={faMagnifyingGlass}  className=" text-xl text-bold "  style={{color: 'var(--color-terceario)'}}/>
          </label>
          <input type="text" value={buscar} onChange={buscando} style={color} className="border-2 border-black px-2 sm:px-3 md:px-5 lg:px-7 py-0.5 rounded-lg placeholder-center focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  mt-3" placeholder="Search" id="logo" />
        </div>
    )
  
}

export default Busqueda