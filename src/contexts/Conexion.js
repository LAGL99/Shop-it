import axios from "axios"

export const Conexion = axios.create({
baseURL:'https://fakestoreapi.com/products'

});

export default Conexion;