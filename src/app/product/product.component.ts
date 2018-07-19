import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  producto: Producto = new Producto(null,null,null);
  listaProductos: Producto[] = new Array;
  listaTipoProducto: string[]=["Gas","Cable de Gas","Cocina"];

  constructor() { }

  ngOnInit() {
  }

  agregarProducto() {

    //let newProduct: Producto = new Producto(this.nombreProducto, this.precio);
    this.listaProductos.push(this.producto);
    
  }

  vaciarProductos(){

    this.listaProductos=new Array;
  }

  selectTipoProducto(args){
    let tipoProducto:string =args.target.value;
    this.producto.tipoProducto=(tipoProducto);
  }

}
