

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado NO necesita manejar un estado.
// MÉTODOS: Listado NO requiere de métodos.
// PROPS: Listado recibe el METODO para AUMENTAR el estado de App y se lo pasa a cada uno de sus hijos.

import React, {useState} from 'react';
import Item from '../Item';
import Productos from '../data.json';


export default function Listado({actualizarCompra}) {
  return (
    <div className='container'>
       
      {    /* renderizamos los Item aquí  */

        Productos.map( ( {id, producto, stock} ) => (

          <Item
              key={id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              stock={stock}
              actualizarCompra={actualizarCompra}
          />

        ))    
      
      }
    </div>
  );
}
