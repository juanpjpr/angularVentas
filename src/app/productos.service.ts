import { Injectable } from '@angular/core';
import { Producto } from './interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  constructor() { }

  agregar(p: Producto) {
    this.productos.push(p);
  }

  get() {
    return this.productos;
  }

  lenght() {
    return this.productos.length;
  }

  delete(pos: number) {
    this.productos.splice(pos, 1);
  }
}
