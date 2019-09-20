import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
 @Output() valor = new EventEmitter();

  constructor(private productos: ProductosService) {

   }
  ngOnInit() {
  }

  valorEmitido() {
     this.valor.emit(false);
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
