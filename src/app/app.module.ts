import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TiendaFormComponent } from './page/tienda-form/tienda-form.component';
import { TiendaComercialComponent } from './page/tienda-comercial/tienda-comercial.component';
import { ProdutoFormComponent } from './page/produto-form/produto-form.component';
import { ProdutoComercialComponent } from './page/produto-comercial/produto-comercial.component';
import { HomeTiendaDashComponent } from './page/home-tienda-dash/home-tienda-dash.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { TiendaListComponent } from './component/tienda-list/tienda-list.component';
import { ProductoListComponent } from './component/producto-list/producto-list.component';
import { ProductoComponent } from './component/producto/producto.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './page/login/login.component';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//reducer
import { TiendaReducer  } from './component/tienda.reducer';
import { ProductoReducer  } from './component/producto.reducer';

import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaFormComponent,
    TiendaComercialComponent,
    ProdutoFormComponent,
    ProdutoComercialComponent,
    HomeTiendaDashComponent,
    HeaderComponent,
    FooterComponent,
    TiendaComponent,
    TiendaListComponent,
    ProductoListComponent,
    ProductoComponent,
    PageNotFoundComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({tiendas:TiendaReducer,productos:ProductoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
