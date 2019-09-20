import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
cantidad: number;
  constructor(private productos: ProductosService) {
    this.cantidad = this.productos.lenght();
   }

  ngOnInit() {
  }

}
