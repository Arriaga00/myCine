import Img from '../assets/logo.png'

function Logo (){
    return (
      <div className='flex gap-2 '>
        <img className='w-12 h-12 cursor-pointer' src={Img} alt="logo" />
        <p className='flex justify-center items-center text-xl font-bold cursor-pointer hover:scale-105 ease-in-out duration-300 '>Popetas</p>
        <span className='text-[#edaede] text-4xl mt-2'>!</span>
      </div>
    )
}

export default Logo