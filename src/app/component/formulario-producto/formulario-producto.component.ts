import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
 
  constructor(private productos: ProductosService) { }

  ngOnInit() {
  }

  accion(form: NgForm) {
    const p: Producto = {
      descripcion: form.value.descripcion,
      pu: form.value.pu
    };
    this.productos.agregar(p);
    form.value.descripcion = '';
    form.value.pu = '';
  }

}
