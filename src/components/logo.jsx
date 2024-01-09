import Img from '../assets/logo.png'
import { useNavigate, useParams } from 'react-router-dom'

function Logo (props){
  const  navegacion = useNavigate()
  const inicio = ()=>{
    navegacion('/')
    props.setTitulo('Películas')
  }


    return (
<div className='flex gap-2 justify-center items-center sm:justify-start'>
  <img className='w-12 h-12 cursor-pointer' src={Img} alt="logo" />
  <p className='flex justify-center items-center text-xl font-bold cursor-pointer hover:scale-105 ease-in-out duration-300 ' onClick={inicio}>Popetas</p>
  <span className='text-[#edaede] text-4xl mt-2 items-center'>!</span>
</div>
    )
}

export default Logo