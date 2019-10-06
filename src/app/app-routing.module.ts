import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { TiendaFormComponent } from './page/tienda-form/tienda-form.component';
import { TiendaComercialComponent} from './page/tienda-comercial/tienda-comercial.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'tienda/nueva',component:TiendaFormComponent},
  {path:'tienda/comercial/:id',component:TiendaComercialComponent},

  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
