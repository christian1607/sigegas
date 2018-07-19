export class Producto {

     nombre: string;
     precio: string;
     tipoProducto: string;

    constructor(nombre: string, precio: string, tipoProducto: string) {
        this.precio = precio;
        this.nombre = nombre;
        this.tipoProducto = tipoProducto;
    }



    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    set setPrecio(precio: string) {
        this.precio = precio;
    }

    get getPrecio(): string {
        return this.precio;
    }

    get getTipoProducto(): string {
        return this.tipoProducto;
    }

    set setTipoProducto(tipoProducto: string) {
        this.tipoProducto = tipoProducto;
    }




}