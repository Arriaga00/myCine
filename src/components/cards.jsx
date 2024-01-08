import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Card = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      let res = await fetch('https://api.disneyapi.dev/character');
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      let json = await res.json();
      setData(json.data);
    } catch (err) {
      let mensaje = err.statusText || 'ocurrio un error';
      setError(`Error ${err.status}: ${mensaje}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <ul className='w-full h-auto gap-x-7 gap-y-5 flex flex-wrap justify-center'>
      {data && data.map((el) => (
        el.films[0]?(
          <Link key={el._id} to={`/${el.films[0].replace(/\s/g, '-')}`}>
            <li className='w-[250px] h-[400px] cursor-pointer hover:scale-105 border-2 shadow-md space-y-2 ease-in-out duration-300 rounded-xl' style={{borderColor:'var(--color-terceario)'}}>
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
