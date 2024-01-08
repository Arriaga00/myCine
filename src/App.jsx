import './App.css'
import Busqueda from './components/busqueda'
import Logo from './components/logo'
import Cards from './components/cards'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import DetallesCard from './components/detallesCard';
import { useState } from 'react';

function App() {

  const [titulo,setTitulo] = useState('Películas')

  return (
    <>
    <Router>
    <header className='flex justify-between flex-wrap px-11'>
      <Logo/>
      <Busqueda />
    </header>
    <div className='mt-20 p-2' >
    <h1 className='flex text-2xl font-bold justify-start pl-16 tracking-widest mb-10' style={{color:'var(--color-blanco)'}}>{titulo}</h1>
    </div>
      <section className='p-2'>
        <Routes>
            <Route path="/" exact element={<Cards/>} />
            <Route path="/:name" element={<DetallesCard setTitulo={setTitulo}/>} />
        </Routes>
      </section>


    </Router>
    </>
  )
}

export default App
