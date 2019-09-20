import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  formularioProductos: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  recibir(valor) {
    this.formularioProductos = valor;
  }
}
