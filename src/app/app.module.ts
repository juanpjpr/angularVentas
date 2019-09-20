import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MarcoComponent } from './marco/marco.component';
import { VentasComponent } from './component/ventas/ventas.component';
import { ProductosComponent } from './component/productos/productos.component';
import { EstadisticasComponent } from './component/estadisticas/estadisticas.component';
import { FormularioProductoComponent } from './component/formulario-producto/formulario-producto.component';
import { TablaProductoComponent } from './component/tabla-producto/tabla-producto.component';
import { HomeComponent } from './component/home/home.component';
import { ProductosService } from './productos.service';


@NgModule({
  declarations: [
    AppComponent,
    MarcoComponent,
    VentasComponent,
    ProductosComponent,
    EstadisticasComponent,
    FormularioProductoComponent,
    TablaProductoComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
