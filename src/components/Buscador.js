import React, { useEffect, useState } from 'react'

export const Buscador = ({listadoState, setListado}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setnoEncontrado] = useState(false)

  const buscarPeli = (e) =>{

    setBusqueda(e.target.value);

    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })

    if(busqueda.length <= 1 || pelis_encontradas <= 0 ){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setnoEncontrado(true);
    }
    else{
      setnoEncontrado(false);
    }

    setListado(pelis_encontradas);
  }

  return (
<div className="search">
   <h3 className="title">Buscador: {busqueda}</h3>
   {(noEncontrado == true && busqueda.length > 1) && (<span className='no-encontrado'>No se ha encontrado</span>)}
    <form>
    <input type="text"
           id='search_field'
           name='busqueda'
           autoComplete='off'
           onChange={buscarPeli}
    />
    <button id='search'>Buscar</button>
    </form>
</div>  
)
}
