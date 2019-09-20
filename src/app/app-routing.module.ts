import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { VentasComponent } from './component/ventas/ventas.component';
import { EstadisticasComponent } from './component/estadisticas/estadisticas.component';



const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'productos', component: ProductosComponent},
   {path: 'ventas', component: VentasComponent},
   {path: 'estadisticas', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
