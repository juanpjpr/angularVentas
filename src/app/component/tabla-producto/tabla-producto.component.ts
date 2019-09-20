import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

producs: Producto[] = [];

  constructor(private productos: ProductosService) { 
    this.producs = this.productos.get();
  }

  ngOnInit() {
  }

  tabla() {
    console.log(this.productos.get());
  }

  delete(pos: number) {
    this.productos.delete(pos);
  }
}
