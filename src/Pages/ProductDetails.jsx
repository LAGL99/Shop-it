import React, { useEffect, useState } from "react";
import Conexion from "../contexts/Conexion";
const ProductDetails = () => {

    const [Producto, setProducto] = useState([])
       
    useEffect (() =>{
        Conexion.get()
        .then(resp => {

            console.log(resp.data)
            setProducto(resp.data)

        }).catch(err =>
            console.log(err))
         }, [])
  
         const renderItem = (Producto) =>{
            return (
                <tr key = {Producto.id.toString()}>

                    <td>
                        <img src = {Producto.image}
                        alt = {Producto.title}
                        style = {{width: 200,
                        }}/>
                    </td>
                    <td>
                        {Producto.title}
                    </td>
                    <td>
                        {Producto.price}
                    </td>
                </tr>
            )

         }
  return (
    <>
    <h1>Tabla de productos</h1>
      <h3>Productos</h3>
      <table className="table">
          <thead>                 
              <tr>                
                  <th>Imagen </th> 
                  <th>Titulo </th>
                  <th>Precio</th>
              </tr>
          </thead>
          <tbody>
            {
                Producto.map(artProducto => renderItem(artProducto))
            }
          </tbody>
      </table>
  </>
  );
};

export default ProductDetails;




