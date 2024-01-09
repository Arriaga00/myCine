import './App.css'
import Busqueda from './components/busqueda'
import Logo from './components/logo'
import Cards from './components/cards'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import DetallesCard from './components/detallesCard';
import { useState, useEffect } from 'react';

function App() {
  const [buscar,setBuscar] = useState('')
  const [titulo,setTitulo] = useState('Películas')
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
    <>
    <Router>
    <header className='flex justify-center flex-wrap px-11 w-full sm:flex-col sm:justify-center'>
        <Logo setTitulo={setTitulo}/>
        <Busqueda  data={data} buscar={buscar} setBuscar={setBuscar}/>
      </header>
    <div className='mt-20 p-2' >
    <h1 className='flex text-2xl font-bold justify-center sm:justify-start sm:pl-16 tracking-widest mb-10' style={{color:'var(--color-blanco)'}}>{titulo}</h1>
    </div>
      <section className='p-2'>
        <Routes>
            <Route path="/" exact element={<Cards data={data} buscar={buscar} />} />
            <Route path="/:name" element={<DetallesCard setTitulo={setTitulo} data={data} titulo={titulo}/>} />
        </Routes>
      </section>


    </Router>
    </>
  )
}

export default App
