import { Component, OnInit } from '@angular/core';
import { Store,Action } from '@ngrx/store';
import { TiendasAction } from './../tienda.acction';
import { AppState } from './../../app.reducer';


@Component({
  selector: 'app-tienda-list',
  templateUrl: './tienda-list.component.html',
  styleUrls: ['./tienda-list.component.scss']
})
export class TiendaListComponent implements OnInit {

  tiendas:any;
  constructor(private store:Store<AppState>) {
    this.store.subscribe(tiendas=>{
      this.tiendas = tiendas["tiendas"];
      console.log(this.tiendas["tiendas"])
		})
  }

  ngOnInit() {
  }
}
