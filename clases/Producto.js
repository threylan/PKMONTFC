import {supabase} from '../.env/supabaseConnect.js';

export class Producto{
    constructor(idProducto, nombre, edicion, rareza, tipo, precio, stock, imagen, estado){
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.edicion = edicion;
        this.rareza = rareza;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.estado = estado;
    }

    static async obtenerTodos(){
        const {data, error} = await supabase
            .from('producto')
            .select('*');

        if(error){
            console.error('Error al obtener productos:', error);
            return [];
        }

        return data.map(item => new Producto(
            item.id,
            item.edicion,
            item.rareza,
            item.tipo,
            item.precio,
            item.stock,
            item.imagen,
            item.estado
        ));
    }
}