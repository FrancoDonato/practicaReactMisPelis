import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Agregar = ({setListado}) => {

    const tituloComponent = "Añadir pelicula";
    const [peliculaState, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    })

    const {titulo, descripcion} = peliculaState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.descripcion.value;

        const peli = {
            id : new Date().getTime(),
            titulo,
            descripcion,
        }

        setPelicula(peli);

        setListado(elementos => {
            return [...elementos, peli]
        })

        GuardarEnStorage("pelis", peli);

    }

  return (
    <div className="add">
        <h3 className="title"> {tituloComponent} </h3>

        <strong>{(titulo && descripcion) && "Has creado la pelicula:" + titulo }</strong>  

        <form onSubmit={conseguirDatosForm}>
            <input id='title'
                   name='title'
                   type="text"
                   placeholder="Titulo"/>
            <textarea id='descripcion'
                      name='descripcion'
                      placeholder="Descripcion"></textarea>
            <input id='save'
                   type="submit"
                   value="Guardar"/>
        </form>

    </div>
    )
}
