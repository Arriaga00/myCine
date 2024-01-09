import { Link } from 'react-router-dom';


const Card = ({data,buscar}) => {


  const filtrar = !buscar ? data : data.filter(el => el.films && el.films[0] && el.films[0].toLowerCase().includes(buscar.toLowerCase()))


  return (
    <ul className='w-full h-auto gap-x-7 gap-y-5 flex flex-wrap justify-center'>
      {filtrar && filtrar.map((el) => (
        el.films[0]?(
          <Link key={el._id} to={`/${el.films[0].replace(/\s/g, '-')}`}>
            <li className='w-[350px] h-[400px] cursor-pointer hover:scale-105 border-2 shadow-md space-y-2 ease-in-out duration-300 rounded-xl' style={{borderColor:'var(--color-terceario)'}}>
              <img src={el.imageUrl} alt={el._id}  className=' w-full h-4/5 rounded-t-lg '/>
              <p className='font-bold pt-4'>{el.films[0]}</p>
            </li>
          </Link>
        ) : null
      ))}
    </ul>
  );
};

export default Card;
