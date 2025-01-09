import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Contenido = ({listadoState, setListado}) => {

    const[editar, setEditar] = useState(0); 

    useEffect(() => {

        console.log("Listado de peliculas");

        conseguirPelis();

    },[]);

    const conseguirPelis = () => {

         let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListado(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {

        let pelis_almacenadas = conseguirPelis();

        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        setListado(nuevo_array_pelis);

        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }
   
  return (
    
    <section className="content">

        {console.log(listadoState)}
        {listadoState!=null ? 
        
            listadoState.map(peli =>
            {
                return(
                     <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="descripcion">{peli.descripcion}</p>
                    <button className="edit" onClick={() => {setEditar(peli.id)}}>Editar</button>
                    <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                     {editar === peli.id && (
                        <Editar peli={peli}
                                conseguirPelis = {conseguirPelis}
                                setEditar = {setEditar}
                                setListado = {setListado}

                        />
                    )}
                    </article>
                )
            }
            
            
        )
        : 
        <h2>No hay peliculas</h2>
        }
    </section>

    )
}
