import React, { useState } from 'react'

export const Agregar = () => {

    const titulo = "Añadir pelicula";
    const [pelicula, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    })

    const conseguirDatosForm = e => {
        e.preventDefault();
        alert("formulario enviado")

        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.description;

        let peli = {
            id : new Date().getTime(),
            titulo,
            descripcion,
        }

        setPelicula(peli);

        console.log(pelicula);
    }

  return (
    <div className="add">
        <h3 className="title"> {titulo} </h3>

        {pelicula.titulo}

        <form onSubmit={conseguirDatosForm}>
            <input id='title'
                   name='title'
                   type="text"
                   placeholder="Titulo"/>
            <textarea id='description'
                      name='description'
                      placeholder="Descripcion"></textarea>
            <input id='save'
                   type="submit"
                   value="Guardar"/>
        </form>

    </div>
    )
}
