import React from 'react'

export const Editar = ({peli, conseguirPelis,setEditar ,setListado}) => {

  const guardarEdicion = (e, id)  => {

    e.preventDefault();

    let target = e.target;

    const pelis_almacenadas = conseguirPelis();

    const indice = pelis_almacenadas.findIndex(peli => peli.id === id)

    let peli_actualizada =  {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,  
    }

    pelis_almacenadas[indice] = peli_actualizada;

    //actualizar en localStorage

    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    setListado(pelis_almacenadas);

    setEditar(0)
  }

    const titulo_componente = 'Editar pelicula';
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={peli.titulo}/>
            <textarea 
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'/>
            <input type='submit' className='editar' value='Actualizar'/>
        </form>
    </div>
  )
}
